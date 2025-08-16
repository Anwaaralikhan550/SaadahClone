import { sql } from "drizzle-orm";
import {
  index,
  jsonb,
  pgTable,
  text,
  timestamp,
  varchar,
  integer,
  boolean,
  uuid,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// Users table
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Events table
export const events = pgTable("events", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  titleAr: text("title_ar"),
  description: text("description").notNull(),
  descriptionAr: text("description_ar"),
  date: timestamp("date").notNull(),
  time: varchar("time").notNull(),
  location: text("location"),
  locationAr: text("location_ar"),
  isFeatured: boolean("is_featured").default(false),
  maxAttendees: integer("max_attendees"),
  currentAttendees: integer("current_attendees").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Event registrations table
export const eventRegistrations = pgTable("event_registrations", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  eventId: uuid("event_id").references(() => events.id).notNull(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  phone: varchar("phone"),
  registeredAt: timestamp("registered_at").defaultNow(),
});

// Donations table
export const donations = pgTable("donations", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  amount: integer("amount").notNull(), // Amount in cents
  donationType: varchar("donation_type").notNull(), // general, zakat, sadaqah, mosque
  frequency: varchar("frequency").notNull(), // one-time, monthly, yearly
  donorName: varchar("donor_name").notNull(),
  donorEmail: varchar("donor_email").notNull(),
  isAnonymous: boolean("is_anonymous").default(false),
  paymentStatus: varchar("payment_status").default("pending"), // pending, completed, failed
  createdAt: timestamp("created_at").defaultNow(),
});

// Contact messages table
export const contactMessages = pgTable("contact_messages", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  subject: varchar("subject").notNull(),
  message: text("message").notNull(),
  isRead: boolean("is_read").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// Prayer times table
export const prayerTimes = pgTable("prayer_times", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  date: varchar("date").notNull(), // YYYY-MM-DD format
  fajr: varchar("fajr").notNull(),
  dhuhr: varchar("dhuhr").notNull(),
  asr: varchar("asr").notNull(),
  maghrib: varchar("maghrib").notNull(),
  isha: varchar("isha").notNull(),
  sunrise: varchar("sunrise"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Newsletter subscriptions table
export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique().notNull(),
  isActive: boolean("is_active").default(true),
  subscribedAt: timestamp("subscribed_at").defaultNow(),
});

// Programs and Services table
export const programs = pgTable("programs", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  titleAr: text("title_ar"),
  category: varchar("category").notNull(), // education, health, poverty, etc.
  description: text("description").notNull(),
  descriptionAr: text("description_ar"),
  features: text("features").array(),
  featuresAr: text("features_ar").array(),
  isActive: boolean("is_active").default(true),
  isFeatured: boolean("is_featured").default(false),
  imageUrl: varchar("image_url"),
  contactInfo: text("contact_info"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Volunteers table
export const volunteers = pgTable("volunteers", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  phone: varchar("phone"),
  skills: text("skills").array(),
  availability: varchar("availability"), // weekends, evenings, etc.
  interests: text("interests").array(), // which programs they want to help with
  experience: text("experience"),
  status: varchar("status").default("pending"), // pending, approved, active
  registeredAt: timestamp("registered_at").defaultNow(),
});

// Success stories table
export const successStories = pgTable("success_stories", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  titleAr: text("title_ar"),
  story: text("story").notNull(),
  storyAr: text("story_ar"),
  beneficiaryName: varchar("beneficiary_name"),
  program: varchar("program"), // which program helped them
  imageUrl: varchar("image_url"),
  isPublished: boolean("is_published").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// Insert schemas
export const insertEventSchema = createInsertSchema(events).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  currentAttendees: true,
});

export const insertEventRegistrationSchema = createInsertSchema(eventRegistrations).omit({
  id: true,
  registeredAt: true,
});

export const insertDonationSchema = createInsertSchema(donations).omit({
  id: true,
  createdAt: true,
  paymentStatus: true,
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
  isRead: true,
});

export const insertPrayerTimesSchema = createInsertSchema(prayerTimes).omit({
  id: true,
  createdAt: true,
});

export const insertNewsletterSubscriptionSchema = createInsertSchema(newsletterSubscriptions).omit({
  id: true,
  subscribedAt: true,
});

export const insertProgramSchema = createInsertSchema(programs).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertVolunteerSchema = createInsertSchema(volunteers).omit({
  id: true,
  registeredAt: true,
  status: true,
});

export const insertSuccessStorySchema = createInsertSchema(successStories).omit({
  id: true,
  createdAt: true,
  isPublished: true,
});

// Types
export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;
export type Event = typeof events.$inferSelect;
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type EventRegistration = typeof eventRegistrations.$inferSelect;
export type InsertEventRegistration = z.infer<typeof insertEventRegistrationSchema>;
export type Donation = typeof donations.$inferSelect;
export type InsertDonation = z.infer<typeof insertDonationSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type PrayerTimes = typeof prayerTimes.$inferSelect;
export type InsertPrayerTimes = z.infer<typeof insertPrayerTimesSchema>;
export type NewsletterSubscription = typeof newsletterSubscriptions.$inferSelect;
export type InsertNewsletterSubscription = z.infer<typeof insertNewsletterSubscriptionSchema>;
export type Program = typeof programs.$inferSelect;
export type InsertProgram = z.infer<typeof insertProgramSchema>;
export type Volunteer = typeof volunteers.$inferSelect;
export type InsertVolunteer = z.infer<typeof insertVolunteerSchema>;
export type SuccessStory = typeof successStories.$inferSelect;
export type InsertSuccessStory = z.infer<typeof insertSuccessStorySchema>;
