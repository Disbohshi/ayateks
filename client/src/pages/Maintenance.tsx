import { Layout } from "@/components/Layout";
import { Check, ShieldCheck, TrendingUp, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Maintenance() {
  return (
    <Layout>
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block p-3 rounded-full bg-green-100 text-green-700 mb-4">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">Preventive Maintenance Plans</h1>
            <p className="text-xl text-muted-foreground">
              Stop problems before they start. Our maintenance plans maximize uptime and extend the life of your expensive equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Maintenance Matters</h2>
              <div className="space-y-6">
                {[
                  { icon: TrendingUp, title: "Extend Equipment Life", text: "Regular servicing can double the effective lifespan of chairs and compressors." },
                  { icon: AlertTriangle, title: "Avoid Costly Downtime", text: "Prevent unexpected failures that cancel patient appointments and lose revenue." },
                  { icon: ShieldCheck, title: "Compliance & Safety", text: "Ensure your sterilization and imaging equipment meets all regulatory standards." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-border shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-8">What's Included</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Bi-annual comprehensive inspection",
                  "Oil change and filter replacement (Compressors)",
                  "Amalgam separator cartridge recycling",
                  "Vacuum pump flushing and cleaning",
                  "Sterilizer gasket and filter check",
                  "Delivery unit water line testing",
                  "Patient chair hydraulic fluid check",
                  "X-ray calibration verification"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Button size="lg" className="w-full bg-primary text-lg" asChild>
                  <Link href="/contact">Get a Maintenance Quote</Link>
                </Button>
                <p className="text-xs text-muted-foreground mt-4">Plans customized to your office size and equipment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
