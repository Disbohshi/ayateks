import { Layout } from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-8">About DentalTech Solutions</h1>
            
            <div className="prose prose-lg text-slate-600 mb-12">
              <p className="lead text-xl">
                Founded in 1995, DentalTech Solutions has grown from a single-van operation to the region's premier provider of dental equipment sales and service.
              </p>
              <p>
                We understand that a dental practice is a complex ecosystem where technology, patient care, and business efficiency intersect. When equipment fails, patient care suffers. That's why we've built our reputation on responsiveness and technical excellence.
              </p>
              <p>
                Our team consists of factory-trained technicians who specialize in A-dec, Midmark, Planmeca, and other major brands. We invest heavily in ongoing training to stay ahead of the curve as dental technology evolves into the digital age.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-8">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Robert Chen", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
                { name: "Sarah Jenkins", role: "Head of Service", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
                { name: "Michael Ross", role: "Sales Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" }
              ].map((member, i) => (
                <div key={i} className="group">
                  <div className="overflow-hidden rounded-xl mb-4 bg-slate-100">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
