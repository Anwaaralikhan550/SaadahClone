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

// Create in-memory storage implementation for Replit environment
export class MemoryStorage implements IStorage {
  private users: Map<string, User> = new Map();
  private events: Map<string, Event> = new Map();
  private eventRegistrations: Map<string, EventRegistration> = new Map();
  private donations: Map<string, Donation> = new Map();
  private contactMessages: Map<string, ContactMessage> = new Map();
  private prayerTimesMap: Map<string, PrayerTimes> = new Map();
  private newsletterSubscriptions: Map<string, NewsletterSubscription> = new Map();

  // Initialize with some sample data
  constructor() {
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Add sample events
    const sampleEvents: Event[] = [
      {
        id: "1",
        title: "Friday Prayer",
        titleAr: "صلاة الجمعة",
        description: "Join us for our weekly Friday congregational prayer",
        descriptionAr: "انضم إلينا لصلاة الجمعة الأسبوعية",
        date: new Date("2025-08-22T13:00:00Z"),
        time: "1:00 PM",
        location: "As-Saadah Islamic Center",
        locationAr: "مركز السعادة الإسلامي",
        isFeatured: true,
        maxAttendees: 200,
        currentAttendees: 85,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2", 
        title: "Islamic Education Workshop",
        titleAr: "ورشة التعليم الإسلامي",
        description: "Learn about Islamic history and values in this interactive workshop",
        descriptionAr: "تعلم عن التاريخ والقيم الإسلامية في هذه الورشة التفاعلية",
        date: new Date("2025-08-25T19:00:00Z"),
        time: "7:00 PM",
        location: "Community Hall",
        locationAr: "قاعة المجتمع",
        isFeatured: false,
        maxAttendees: 50,
        currentAttendees: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];

    sampleEvents.forEach(event => this.events.set(event.id, event));

    // Add sample prayer times for today
    const today = new Date().toISOString().split('T')[0];
    const samplePrayerTimes: PrayerTimes = {
      id: "today",
      date: today,
      fajr: "5:30 AM",
      dhuhr: "12:15 PM",
      asr: "3:45 PM",
      maghrib: "6:20 PM",
      isha: "7:45 PM",
      sunrise: "6:45 AM",
      createdAt: new Date(),
    };
    this.prayerTimesMap.set(today, samplePrayerTimes);
  }

  // User operations
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const user: User = {
      id: userData.id || this.generateId(),
      email: userData.email || null,
      firstName: userData.firstName || null,
      lastName: userData.lastName || null,
      profileImageUrl: userData.profileImageUrl || null,
      createdAt: userData.createdAt || new Date(),
      updatedAt: new Date(),
    };
    this.users.set(user.id, user);
    return user;
  }

  // Event operations
  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values()).sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  async getFeaturedEvents(): Promise<Event[]> {
    return Array.from(this.events.values())
      .filter(event => event.isFeatured)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  async getEvent(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(eventData: InsertEvent): Promise<Event> {
    const event: Event = {
      id: this.generateId(),
      title: eventData.title,
      titleAr: eventData.titleAr || null,
      description: eventData.description,
      descriptionAr: eventData.descriptionAr || null,
      date: eventData.date,
      time: eventData.time,
      location: eventData.location || null,
      locationAr: eventData.locationAr || null,
      isFeatured: eventData.isFeatured || null,
      maxAttendees: eventData.maxAttendees || null,
      currentAttendees: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.events.set(event.id, event);
    return event;
  }

  async updateEvent(id: string, eventData: Partial<InsertEvent>): Promise<Event> {
    const existingEvent = this.events.get(id);
    if (!existingEvent) {
      throw new Error("Event not found");
    }
    const updatedEvent: Event = {
      ...existingEvent,
      ...eventData,
      updatedAt: new Date(),
    };
    this.events.set(id, updatedEvent);
    return updatedEvent;
  }

  async deleteEvent(id: string): Promise<void> {
    this.events.delete(id);
  }

  // Event registration operations
  async registerForEvent(registration: InsertEventRegistration): Promise<EventRegistration> {
    const newRegistration: EventRegistration = {
      id: this.generateId(),
      eventId: registration.eventId,
      name: registration.name,
      email: registration.email,
      phone: registration.phone || null,
      registeredAt: new Date(),
    };
    this.eventRegistrations.set(newRegistration.id, newRegistration);
    
    // Update event attendee count
    const event = this.events.get(registration.eventId);
    if (event) {
      const registrationsForEvent = Array.from(this.eventRegistrations.values())
        .filter(reg => reg.eventId === registration.eventId);
      event.currentAttendees = registrationsForEvent.length;
      this.events.set(registration.eventId, event);
    }

    return newRegistration;
  }

  async getEventRegistrations(eventId: string): Promise<EventRegistration[]> {
    return Array.from(this.eventRegistrations.values())
      .filter(reg => reg.eventId === eventId);
  }

  // Donation operations
  async createDonation(donationData: InsertDonation): Promise<Donation> {
    const donation: Donation = {
      id: this.generateId(),
      amount: donationData.amount,
      donationType: donationData.donationType,
      frequency: donationData.frequency,
      donorName: donationData.donorName,
      donorEmail: donationData.donorEmail,
      isAnonymous: donationData.isAnonymous || null,
      paymentStatus: "pending",
      createdAt: new Date(),
    };
    this.donations.set(donation.id, donation);
    return donation;
  }

  async getDonations(): Promise<Donation[]> {
    return Array.from(this.donations.values()).sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    });
  }

  async updateDonationStatus(id: string, status: string): Promise<void> {
    const donation = this.donations.get(id);
    if (donation) {
      donation.paymentStatus = status;
      this.donations.set(id, donation);
    }
  }

  // Contact operations
  async createContactMessage(messageData: InsertContactMessage): Promise<ContactMessage> {
    const message: ContactMessage = {
      id: this.generateId(),
      ...messageData,
      isRead: false,
      createdAt: new Date(),
    };
    this.contactMessages.set(message.id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    });
  }

  async markMessageAsRead(id: string): Promise<void> {
    const message = this.contactMessages.get(id);
    if (message) {
      message.isRead = true;
      this.contactMessages.set(id, message);
    }
  }

  // Prayer times operations
  async getPrayerTimes(date: string): Promise<PrayerTimes | undefined> {
    return this.prayerTimesMap.get(date);
  }

  async createPrayerTimes(prayerTimesData: InsertPrayerTimes): Promise<PrayerTimes> {
    const prayerTimes: PrayerTimes = {
      id: this.generateId(),
      date: prayerTimesData.date,
      fajr: prayerTimesData.fajr,
      dhuhr: prayerTimesData.dhuhr,
      asr: prayerTimesData.asr,
      maghrib: prayerTimesData.maghrib,
      isha: prayerTimesData.isha,
      sunrise: prayerTimesData.sunrise || null,
      createdAt: new Date(),
    };
    this.prayerTimesMap.set(prayerTimesData.date, prayerTimes);
    return prayerTimes;
  }

  // Newsletter operations
  async subscribeToNewsletter(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const existingSubscription = this.newsletterSubscriptions.get(subscription.email);
    if (existingSubscription) {
      existingSubscription.isActive = true;
      existingSubscription.subscribedAt = new Date();
      return existingSubscription;
    }

    const newSubscription: NewsletterSubscription = {
      id: this.generateId(),
      ...subscription,
      isActive: true,
      subscribedAt: new Date(),
    };
    this.newsletterSubscriptions.set(subscription.email, newSubscription);
    return newSubscription;
  }

  async unsubscribeFromNewsletter(email: string): Promise<void> {
    const subscription = this.newsletterSubscriptions.get(email);
    if (subscription) {
      subscription.isActive = false;
      this.newsletterSubscriptions.set(email, subscription);
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

// Use in-memory storage for Replit environment compatibility
export const storage = process.env.DATABASE_URL && process.env.DATABASE_URL !== "postgresql://user:password@localhost:5432/temp_db" 
  ? new DatabaseStorage()
  : new MemoryStorage();
