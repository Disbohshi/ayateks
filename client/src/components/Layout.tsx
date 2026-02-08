import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/equipment", label: "Equipment Sales" },
    { href: "/service", label: "Service & Repairs" },
    { href: "/maintenance", label: "Maintenance Plans" },
    { href: "/financing", label: "Financing" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-xs md:text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> (555) 123-4567
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> service@dentaltech.com
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Serving the Greater Metro Area
            </span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-primary leading-none uppercase tracking-tight">Aya Technical</span>
              <span className="text-xs text-muted-foreground font-medium tracking-widest">SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-md shadow-accent/20" asChild>
              <Link href="/service">Schedule Service</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-background border-b shadow-lg animate-in slide-in-from-top-5">
            <nav className="container mx-auto py-4 flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location === link.href 
                      ? "bg-primary/10 text-primary" 
                      : "hover:bg-muted text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t px-4">
                <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                  <Link href="/service">Schedule Service</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="h-8 w-8 bg-gradient-to-br from-primary to-secondary rounded-md flex items-center justify-center font-bold text-lg">
                A
              </div>
              <span className="text-xl font-display font-bold uppercase tracking-tight">Aya Technical</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Providing premier dental equipment sales, service, and maintenance since 1995. We keep your practice running so you can focus on patients.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/equipment" className="hover:text-secondary transition-colors">Equipment Sales</Link></li>
              <li><Link href="/service" className="hover:text-secondary transition-colors">Service Request</Link></li>
              <li><Link href="/maintenance" className="hover:text-secondary transition-colors">Preventive Maintenance</Link></li>
              <li><Link href="/financing" className="hover:text-secondary transition-colors">Financing Options</Link></li>
              <li><Link href="/careers" className="hover:text-secondary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Emergency Repairs</li>
              <li>Equipment Installation</li>
              <li>Annual Maintenance</li>
              <li>Upholstery Services</li>
              <li>Practice Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>123 Medical Plaza Blvd,<br />Suite 400<br />Metro City, ST 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>service@dentaltech.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Aya Technical Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
