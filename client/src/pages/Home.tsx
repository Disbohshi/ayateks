import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Settings, ShieldCheck, PenTool, Truck, Phone } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useTestimonials } from "@/hooks/use-testimonials";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const { data: testimonials } = useTestimonials();

  // Schema.org LocalBusiness Data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aya Technical Solutions",
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
    "description": "Premier dental equipment sales, repair, and preventive maintenance services by Aya Technical.",
    "telephone": "+1-555-123-4567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Medical Plaza Blvd, Suite 400",
      "addressLocality": "Metro City",
      "addressRegion": "ST",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "url": window.location.origin,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <Layout>
      <Helmet>
        <title>Aya Technical | Dental Equipment Sales & Service</title>
        <meta name="description" content="Expert dental equipment repair, sales, and maintenance by Aya Technical. We service DCI chairs, TPC imaging, vacuum systems, and more." />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white min-h-[600px] flex items-center overflow-hidden">
        {/* Abstract background image from Unsplash: Modern dental clinic interior blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" 
            alt="Dental Clinic Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-semibold tracking-wide">
              TRUSTED BY 500+ CLINICS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Keep Your Practice <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Running Smoothly</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl">
              Premier dental equipment sales, repair, and preventive maintenance. We handle the tech so you can focus on your patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-12 px-8" asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white text-lg h-12 px-8" asChild>
                <Link href="/service">Schedule Service</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400 text-sm"
        >
          <span>Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent mt-2" />
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Comprehensive Equipment Solutions</h2>
            <p className="text-muted-foreground text-lg">
              We service and sell equipment from all major manufacturers, ensuring your clinic is equipped with the best tools for the job.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Chairs & Units", icon: Settings, desc: "DCI dental chairs and delivery units", img: "https://images.unsplash.com/photo-1576091160550-2173dad99978?w=800&q=80" },
              { title: "Imaging", icon: ShieldCheck, desc: "TPC digital imaging and X-ray systems", img: "https://plus.unsplash.com/premium_photo-1664474744781-35b8630018f7?w=800&q=80" },
              { title: "Sterilization", icon: ShieldCheck, desc: "Autoclaves and ultrasonic cleaners", img: "https://images.unsplash.com/photo-1583331619231-57831c2a047d?w=800&q=80" },
              { title: "Mechanical Room", icon: Truck, desc: "Professional vacuum and compressor systems", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
              >
                <Link href="/equipment">
                  <div className="absolute inset-0">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Expert Service in 3 Simple Steps</h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Request Service", desc: "Submit a request online or call our dispatch team.", icon: Phone },
                  { step: "02", title: "Diagnosis & Repair", desc: "Our certified technician arrives fully stocked to fix the issue.", icon: PenTool },
                  { step: "03", title: "Back to Business", desc: "We test everything to ensure your practice is up and running.", icon: Calendar }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-primary font-bold font-display text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button className="bg-primary" asChild>
                  <Link href="/service">Request Service Now</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                alt="Technician repairing equipment" 
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span className="font-bold tracking-wider uppercase text-sm">Emergency Response</span>
            </div>
            <h2 className="text-3xl font-display font-bold mb-2">Equipment Down? We Can Help.</h2>
            <p className="text-white/80 max-w-xl">
              We prioritize emergency calls to get your critical equipment back online. Same-day dispatch available for urgent requests.
            </p>
          </div>
          <div className="flex gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90 font-bold" asChild>
              <a href="tel:5551234567">Call (555) 123-4567</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">What Dentists Are Saying</h2>
          
          <div className="max-w-4xl mx-auto">
            <Carousel
              plugins={[Autoplay({ delay: 5000 })]}
              className="w-full"
            >
              <CarouselContent>
                {testimonials?.length ? testimonials.map((t) => (
                  <CarouselItem key={t.id} className="md:basis-1/2">
                    <div className="p-2">
                      <Card className="border-none shadow-lg bg-slate-50">
                        <CardContent className="pt-6 p-8">
                          <div className="flex gap-1 mb-4">
                            {[...Array(t.rating)].map((_, i) => (
                              <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-muted-foreground italic mb-6">"{t.content}"</p>
                          <div>
                            <p className="font-bold text-primary">{t.name}</p>
                            <p className="text-sm text-slate-500">{t.role}{t.company && `, ${t.company}`}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )) : (
                  // Fallback if no testimonials
                  [1, 2].map((i) => (
                    <CarouselItem key={i} className="md:basis-1/2">
                      <div className="p-2">
                        <Card className="border-none shadow-lg bg-slate-50">
                          <CardContent className="pt-6 p-8">
                            <p className="text-muted-foreground italic mb-6">"Service was incredibly fast and professional. Our compressor went down at 9am and they had it fixed by noon."</p>
                            <div>
                              <p className="font-bold text-primary">Dr. Sarah Miller</p>
                              <p className="text-sm text-slate-500">Miller Family Dental</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))
                )}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>
    </Layout>
  );
}
