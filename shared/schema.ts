import { pgTable, text, serial, timestamp, boolean, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === Inquiries (General Contact / Sales Quote) ===
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  company: text("company"),
  message: text("message").notNull(),
  type: text("type").notNull().default("general"), // 'general', 'sales_quote', 'preventive_maintenance'
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({ id: true, createdAt: true });

// === Service Requests ===
export const serviceRequests = pgTable("service_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  practiceName: text("practice_name").notNull(),
  equipmentType: text("equipment_type").notNull(), // 'chair', 'imaging', 'compressor', etc.
  issueDescription: text("issue_description").notNull(),
  preferredDate: text("preferred_date"), // Keep as text for flexibility or specific date format
  isEmergency: boolean("is_emergency").default(false),
  status: text("status").default("pending"), // 'pending', 'scheduled', 'completed'
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertServiceRequestSchema = createInsertSchema(serviceRequests).omit({ id: true, createdAt: true, status: true });

// === Testimonials (Admin Editable) ===
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role"), // e.g. "Dr. Smith, DDS"
  company: text("company"),
  content: text("content").notNull(),
  rating: integer("rating").default(5),
  approved: boolean("approved").default(true),
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({ id: true });

// === FAQs (Admin Editable) ===
export const faqs = pgTable("faqs", {
  id: serial("id").primaryKey(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  category: text("category").notNull(), // 'service', 'sales', 'billing'
  order: integer("order").default(0),
});

export const insertFaqSchema = createInsertSchema(faqs).omit({ id: true });

// === Products (Simple Catalog) ===
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(), // 'chairs', 'imaging', 'sterilization', etc.
  description: text("description").notNull(),
  imageUrl: text("image_url"),
  features: jsonb("features").$type<string[]>(), // Array of feature strings
});

export const insertProductSchema = createInsertSchema(products).omit({ id: true });

// === Types ===
export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export type ServiceRequest = typeof serviceRequests.$inferSelect;
export type InsertServiceRequest = z.infer<typeof insertServiceRequestSchema>;

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;

export type Faq = typeof faqs.$inferSelect;
export type InsertFaq = z.infer<typeof insertFaqSchema>;

export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
