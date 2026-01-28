import { Layout } from "@/components/Layout";
import { ServiceRequestForm } from "@/components/ServiceRequestForm";
import { CheckCircle2, Wrench, Clock, Shield } from "lucide-react";

export default function ServiceRepairs() {
  return (
    <Layout>
      <div className="bg-slate-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Service & Repairs</h1>
            <p className="text-xl text-muted-foreground">
              Factory-trained technicians ready to keep your practice operational.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info Column */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-secondary" /> 
                  Our Expertise
                </h3>
                <ul className="space-y-3">
                  {['Dental Chairs & Units', 'X-Ray & Imaging Systems', 'Sterilizers & Autoclaves', 'Compressors & Vacuums', 'Small Equipment Repair'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-primary/60" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-secondary" /> 
                  Response Times
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We understand that downtime costs money. Our dispatch system prioritizes emergency calls.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Emergency</span>
                    <span className="text-green-600 font-bold">Same Day</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Urgent</span>
                    <span className="text-primary">24 Hours</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Standard</span>
                    <span className="text-slate-600">2-3 Days</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-blue-900">
                  <Shield className="h-5 w-5" /> 
                  Warranty
                </h3>
                <p className="text-sm text-blue-800">
                  All our repairs come with a 90-day parts and labor warranty for your peace of mind.
                </p>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <ServiceRequestForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
