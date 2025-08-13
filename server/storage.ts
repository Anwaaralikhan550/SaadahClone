import {
  users,
  events,
  eventRegistrations,
  donations,
  contactMessages,
  prayerTimes,
  newsletterSubscriptions,
  type User,
  type UpsertUser,
  type Event,
  type InsertEvent,
  type EventRegistration,
  type InsertEventRegistration,
  type Donation,
  type InsertDonation,
  type ContactMessage,
  type InsertContactMessage,
  type PrayerTimes,
  type InsertPrayerTimes,
  type NewsletterSubscription,
  type InsertNewsletterSubscription,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and, gte, lte, sql } from "drizzle-orm";

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;

  // Event operations
  getEvents(): Promise<Event[]>;
  getFeaturedEvents(): Promise<Event[]>;
  getEvent(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  updateEvent(id: string, event: Partial<InsertEvent>): Promise<Event>;
  deleteEvent(id: string): Promise<void>;

  // Event registration operations
  registerForEvent(registration: InsertEventRegistration): Promise<EventRegistration>;
  getEventRegistrations(eventId: string): Promise<EventRegistration[]>;

  // Donation operations
  createDonation(donation: InsertDonation): Promise<Donation>;
  getDonations(): Promise<Donation[]>;
  updateDonationStatus(id: string, status: string): Promise<void>;

  // Contact operations
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  markMessageAsRead(id: string): Promise<void>;

  // Prayer times operations
  getPrayerTimes(date: string): Promise<PrayerTimes | undefined>;
  createPrayerTimes(prayerTimes: InsertPrayerTimes): Promise<PrayerTimes>;

  // Newsletter operations
  subscribeToNewsletter(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  unsubscribeFromNewsletter(email: string): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Event operations
  async getEvents(): Promise<Event[]> {
    return await db.select().from(events).orderBy(desc(events.date));
  }

  async getFeaturedEvents(): Promise<Event[]> {
    return await db
      .select()
      .from(events)
      .where(eq(events.isFeatured, true))
      .orderBy(desc(events.date));
  }

  async getEvent(id: string): Promise<Event | undefined> {
    const [event] = await db.select().from(events).where(eq(events.id, id));
    return event;
  }

  async createEvent(event: InsertEvent): Promise<Event> {
    const [newEvent] = await db.insert(events).values(event).returning();
    return newEvent;
  }

  async updateEvent(id: string, event: Partial<InsertEvent>): Promise<Event> {
    const [updatedEvent] = await db
      .update(events)
      .set({ ...event, updatedAt: new Date() })
      .where(eq(events.id, id))
      .returning();
    return updatedEvent;
  }

  async deleteEvent(id: string): Promise<void> {
    await db.delete(events).where(eq(events.id, id));
  }

  // Event registration operations
  async registerForEvent(registration: InsertEventRegistration): Promise<EventRegistration> {
    const [newRegistration] = await db
      .insert(eventRegistrations)
      .values(registration)
      .returning();
    
    // Update event attendee count
    const [countResult] = await db
      .select({ count: sql`count(*)`.as('count') })
      .from(eventRegistrations)
      .where(eq(eventRegistrations.eventId, registration.eventId));
    
    await db
      .update(events)
      .set({
        currentAttendees: countResult.count as number,
      })
      .where(eq(events.id, registration.eventId));

    return newRegistration;
  }

  async getEventRegistrations(eventId: string): Promise<EventRegistration[]> {
    return await db
      .select()
      .from(eventRegistrations)
      .where(eq(eventRegistrations.eventId, eventId));
  }

  // Donation operations
  async createDonation(donation: InsertDonation): Promise<Donation> {
    const [newDonation] = await db.insert(donations).values(donation).returning();
    return newDonation;
  }

  async getDonations(): Promise<Donation[]> {
    return await db.select().from(donations).orderBy(desc(donations.createdAt));
  }

  async updateDonationStatus(id: string, status: string): Promise<void> {
    await db
      .update(donations)
      .set({ paymentStatus: status })
      .where(eq(donations.id, id));
  }

  // Contact operations
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return await db
      .select()
      .from(contactMessages)
      .orderBy(desc(contactMessages.createdAt));
  }

  async markMessageAsRead(id: string): Promise<void> {
    await db
      .update(contactMessages)
      .set({ isRead: true })
      .where(eq(contactMessages.id, id));
  }

  // Prayer times operations
  async getPrayerTimes(date: string): Promise<PrayerTimes | undefined> {
    const [prayerTime] = await db
      .select()
      .from(prayerTimes)
      .where(eq(prayerTimes.date, date));
    return prayerTime;
  }

  async createPrayerTimes(prayerTimesData: InsertPrayerTimes): Promise<PrayerTimes> {
    const [newPrayerTimes] = await db
      .insert(prayerTimes)
      .values(prayerTimesData)
      .returning();
    return newPrayerTimes;
  }

  // Newsletter operations
  async subscribeToNewsletter(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const [newSubscription] = await db
      .insert(newsletterSubscriptions)
      .values(subscription)
      .onConflictDoUpdate({
        target: newsletterSubscriptions.email,
        set: {
          isActive: true,
          subscribedAt: new Date(),
        },
      })
      .returning();
    return newSubscription;
  }

  async unsubscribeFromNewsletter(email: string): Promise<void> {
    await db
      .update(newsletterSubscriptions)
      .set({ isActive: false })
      .where(eq(newsletterSubscriptions.email, email));
  }
}

export const storage = new DatabaseStorage();
