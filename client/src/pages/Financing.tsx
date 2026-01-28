import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calculator, Banknote, CalendarCheck } from "lucide-react";

export default function Financing() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">Flexible Financing Options</h1>
            <p className="text-xl text-muted-foreground text-center mb-16">
              Upgrade your practice today without breaking the bank. We partner with leading medical lenders to offer competitive rates.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Banknote, title: "Low Interest Rates", desc: "Competitive APRs starting as low as 4.99% for qualified practices." },
                { icon: CalendarCheck, title: "Flexible Terms", desc: "Choose from 12, 24, 36, 48, or 60 month repayment terms." },
                { icon: Calculator, title: "Tax Benefits", desc: "Section 179 tax deductions may allow you to write off the full purchase price." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm border text-center hover:shadow-md transition-shadow">
                  <div className="mx-auto w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ready to Upgrade?</h3>
                  <p className="text-blue-100 max-w-lg">
                    Apply for pre-approval in minutes. No impact to your credit score to check rates.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                    <Link href="/contact">Contact Finance Team</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
