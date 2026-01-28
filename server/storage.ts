import { 
  inquiries, serviceRequests, testimonials, faqs, products,
  type InsertInquiry, type InsertServiceRequest, type InsertTestimonial, type InsertFaq, type InsertProduct,
  type Inquiry, type ServiceRequest, type Testimonial, type Faq, type Product
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  createServiceRequest(request: InsertServiceRequest): Promise<ServiceRequest>;
  getTestimonials(): Promise<Testimonial[]>;
  getFaqs(): Promise<Faq[]>;
  getProducts(category?: string): Promise<Product[]>;
  
  // Admin/Seeding methods
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  createFaq(faq: InsertFaq): Promise<Faq>;
  createProduct(product: InsertProduct): Promise<Product>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db.insert(inquiries).values(insertInquiry).returning();
    return inquiry;
  }

  async createServiceRequest(insertRequest: InsertServiceRequest): Promise<ServiceRequest> {
    const [request] = await db.insert(serviceRequests).values(insertRequest).returning();
    return request;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials).where(eq(testimonials.approved, true));
  }

  async getFaqs(): Promise<Faq[]> {
    return await db.select().from(faqs).orderBy(faqs.order);
  }

  async getProducts(category?: string): Promise<Product[]> {
    if (category) {
      return await db.select().from(products).where(eq(products.category, category));
    }
    return await db.select().from(products);
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const [t] = await db.insert(testimonials).values(testimonial).returning();
    return t;
  }

  async createFaq(faq: InsertFaq): Promise<Faq> {
    const [f] = await db.insert(faqs).values(faq).returning();
    return f;
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const [p] = await db.insert(products).values(product).returning();
    return p;
  }
}

export const storage = new DatabaseStorage();
