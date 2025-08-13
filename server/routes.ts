import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertEventSchema,
  insertEventRegistrationSchema,
  insertDonationSchema,
  insertContactMessageSchema,
  insertNewsletterSubscriptionSchema,
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Events routes
  app.get("/api/events", async (_req, res) => {
    try {
      const events = await storage.getEvents();
      res.json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  app.get("/api/events/featured", async (_req, res) => {
    try {
      const events = await storage.getFeaturedEvents();
      res.json(events);
    } catch (error) {
      console.error("Error fetching featured events:", error);
      res.status(500).json({ message: "Failed to fetch featured events" });
    }
  });

  app.get("/api/events/:id", async (req, res) => {
    try {
      const event = await storage.getEvent(req.params.id);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      res.json(event);
    } catch (error) {
      console.error("Error fetching event:", error);
      res.status(500).json({ message: "Failed to fetch event" });
    }
  });

  app.post("/api/events", async (req, res) => {
    try {
      const validatedData = insertEventSchema.parse(req.body);
      const event = await storage.createEvent(validatedData);
      res.status(201).json(event);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid event data", errors: error.errors });
      }
      console.error("Error creating event:", error);
      res.status(500).json({ message: "Failed to create event" });
    }
  });

  // Event registration routes
  app.post("/api/events/:id/register", async (req, res) => {
    try {
      const eventId = req.params.id;
      const registrationData = { ...req.body, eventId };
      const validatedData = insertEventRegistrationSchema.parse(registrationData);
      
      const registration = await storage.registerForEvent(validatedData);
      res.status(201).json(registration);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid registration data", errors: error.errors });
      }
      console.error("Error registering for event:", error);
      res.status(500).json({ message: "Failed to register for event" });
    }
  });

  app.get("/api/events/:id/registrations", async (req, res) => {
    try {
      const registrations = await storage.getEventRegistrations(req.params.id);
      res.json(registrations);
    } catch (error) {
      console.error("Error fetching event registrations:", error);
      res.status(500).json({ message: "Failed to fetch event registrations" });
    }
  });

  // Donations routes
  app.post("/api/donations", async (req, res) => {
    try {
      const validatedData = insertDonationSchema.parse(req.body);
      const donation = await storage.createDonation(validatedData);
      
      // In a real implementation, this would integrate with a payment processor
      // For now, we'll mark it as completed
      await storage.updateDonationStatus(donation.id, "completed");
      
      res.status(201).json(donation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid donation data", errors: error.errors });
      }
      console.error("Error processing donation:", error);
      res.status(500).json({ message: "Failed to process donation" });
    }
  });

  app.get("/api/donations", async (_req, res) => {
    try {
      const donations = await storage.getDonations();
      res.json(donations);
    } catch (error) {
      console.error("Error fetching donations:", error);
      res.status(500).json({ message: "Failed to fetch donations" });
    }
  });

  // Contact routes
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // In a real implementation, this would send an email notification
      console.log("New contact message received:", message);
      
      res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid contact data", errors: error.errors });
      }
      console.error("Error sending contact message:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ message: "Failed to fetch contact messages" });
    }
  });

  // Prayer times routes
  app.get("/api/prayer-times/:date", async (req, res) => {
    try {
      const prayerTimes = await storage.getPrayerTimes(req.params.date);
      if (!prayerTimes) {
        return res.status(404).json({ message: "Prayer times not found for this date" });
      }
      res.json(prayerTimes);
    } catch (error) {
      console.error("Error fetching prayer times:", error);
      res.status(500).json({ message: "Failed to fetch prayer times" });
    }
  });

  app.get("/api/prayer-times/today", async (_req, res) => {
    try {
      const today = new Date().toISOString().split('T')[0];
      const prayerTimes = await storage.getPrayerTimes(today);
      
      if (!prayerTimes) {
        // Return default prayer times if not found
        const defaultTimes = {
          date: today,
          fajr: "5:15 AM",
          dhuhr: "12:30 PM",
          asr: "3:45 PM",
          maghrib: "6:20 PM",
          isha: "7:45 PM",
          sunrise: "6:45 AM"
        };
        res.json(defaultTimes);
      } else {
        res.json(prayerTimes);
      }
    } catch (error) {
      console.error("Error fetching today's prayer times:", error);
      res.status(500).json({ message: "Failed to fetch prayer times" });
    }
  });

  // Newsletter routes
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.subscribeToNewsletter(validatedData);
      res.status(201).json({ message: "Successfully subscribed to newsletter" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid email address", errors: error.errors });
      }
      console.error("Error subscribing to newsletter:", error);
      res.status(500).json({ message: "Failed to subscribe to newsletter" });
    }
  });

  app.post("/api/newsletter/unsubscribe", async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
      
      await storage.unsubscribeFromNewsletter(email);
      res.json({ message: "Successfully unsubscribed from newsletter" });
    } catch (error) {
      console.error("Error unsubscribing from newsletter:", error);
      res.status(500).json({ message: "Failed to unsubscribe from newsletter" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
