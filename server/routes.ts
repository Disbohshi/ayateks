import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      // TODO: Integrate email sending here
      console.log(`New Inquiry: ${input.name} (${input.email}) - ${input.message}`);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.post(api.serviceRequests.create.path, async (req, res) => {
    try {
      const input = api.serviceRequests.create.input.parse(req.body);
      const request = await storage.createServiceRequest(input);
      // TODO: Integrate email sending here
      console.log(`New Service Request: ${input.name} - ${input.issueDescription}`);
      res.status(201).json(request);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.get(api.testimonials.list.path, async (req, res) => {
    const items = await storage.getTestimonials();
    res.json(items);
  });

  app.get(api.faqs.list.path, async (req, res) => {
    const items = await storage.getFaqs();
    res.json(items);
  });

  app.get(api.products.list.path, async (req, res) => {
    const category = req.query.category as string | undefined;
    const items = await storage.getProducts(category);
    res.json(items);
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const products = await storage.getProducts();
  if (products.length === 0) {
    console.log("Seeding database...");
    
    // Seed Products
    await storage.createProduct({
      name: "A-dec 500 Dental Chair",
      category: "Chairs",
      description: "Premium comfort and access with integrated delivery system.",
      imageUrl: "/images/dental-chair.jpg",
      features: ["Ultra-thin backrest", "Pressure mapping comfort", "Integrated touchpad"],
    });
    await storage.createProduct({
      name: "Planmeca ProMax 3D",
      category: "Imaging",
      description: "All-in-one CBCT unit including 3D imaging, 3D photo, digital 2D panoramics.",
      imageUrl: "/images/dental-imaging.jpg",
      features: ["SCARA technology", "Face photo", "Endodontic mode"],
    });
    await storage.createProduct({
      name: "Silent Compressor",
      category: "Mechanical",
      description: "Oil-free dental air compressor for reliable air supply.",
      imageUrl: "/images/vacuum-system.jpg",
      features: ["Quiet operation", "Dual head", "Large tank"],
    });

    // Seed FAQs
    await storage.createFaq({
      question: "What is your service response time?",
      answer: "We aim for a 24-hour response time for all standard service calls, and same-day response for emergencies.",
      category: "Service",
      order: 1,
    });
    await storage.createFaq({
      question: "Do you offer preventive maintenance plans?",
      answer: "Yes, we offer comprehensive annual maintenance plans to keep your equipment running smoothly and prevent downtime.",
      category: "Service",
      order: 2,
    });
    await storage.createFaq({
      question: "Do you offer financing?",
      answer: "Yes, we partner with major medical lenders to offer competitive financing rates for equipment purchases.",
      category: "Sales",
      order: 3,
    });

    // Seed Testimonials
    await storage.createTestimonial({
      name: "Dr. Sarah Johnson",
      company: "Bright Smile Dental",
      content: "The service team is incredible. They fixed our compressor in under 2 hours and saved our day!",
      rating: 5,
      role: "Owner/Dentist"
    });
    await storage.createTestimonial({
      name: "Dr. Michael Chen",
      company: "Chen Orthodontics",
      content: "Top-notch equipment and even better support. Highly recommend for any new practice setup.",
      rating: 5,
      role: "Orthodontist"
    });
    
    console.log("Database seeded!");
  }
}
