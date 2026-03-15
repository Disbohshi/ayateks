import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/use-products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { useState } from "react";

export default function EquipmentSales() {
  const [category, setCategory] = useState<string | undefined>();
  const { data: products, isLoading } = useProducts(category);

  // Fallback data if API is empty
  const mockProducts = [
    { id: 1, name: "ADS Dental Chair", category: "Chairs", description: "Premium comfort and access with integrated delivery system.", features: ["Ultra-thin backrest", "Pressure mapping comfort", "Integrated touchpad"], imageUrl: "/images/dental-chair.jpg" },
    { id: 2, name: "Owandy I-MAX", category: "Imaging", description: "All-in-one CBCT unit including 3D imaging, 3D photo, digital 2D panoramics.", features: ["SCARA technology", "Face photo", "Endodontic mode"], imageUrl: "/images/dental-imaging.jpg" },
    { id: 3, name: "ADS ACA5 Autoclave", category: "Sterilization", description: "Automatic opening door for efficient instrument drying.", features: ["Large chamber", "Steam-flush", "LCD display"], imageUrl: "/images/sterilizer.jpg" },
    { id: 4, name: "TPC Oilless Compressor", category: "Mechanical", description: "Oil-free dental air compressor for up to 4 users.", features: ["100% oil-free", "Membrane dryer", "Compact design"], imageUrl: "/images/vacuum-system.jpg" },
    { id: 5, name: "TPC/ADS/SDS", category: "Lighting", description: "LED operatory light with exceptional brightness and color accuracy.", features: ["No-touch sensor", "Cool operation", "Crisp white light"], imageUrl: "/images/dental-light.jpg" },
    { id: 6, name: "TechWest", category: "Mechanical", description: "Wet vacuum system providing consistent suction.", features: ["Water-recycling", "High performance", "Durable"], imageUrl: "/images/vacuum-system.jpg" },
  ];

  const displayProducts = (isLoading || !products || products.length === 0) ? mockProducts : products;
  
  const categories = ["All", "Chairs", "Imaging", "Sterilization", "Mechanical", "Lighting", "Small Equipment"];

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen pb-20">
        {/* Header */}
        <div className="bg-white border-b border-border/40 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-primary mb-4">Equipment Catalog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Browse our selection of top-tier dental equipment. We are authorized dealers for major brands.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="w-full md:w-64 flex-shrink-0 space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search products..." className="pl-9" />
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-slate-900">Categories</h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={category === (cat === "All" ? undefined : cat) ? "secondary" : "ghost"}
                      className={`w-full justify-start ${category === (cat === "All" ? undefined : cat) ? "font-bold" : ""}`}
                      onClick={() => setCategory(cat === "All" ? undefined : cat)}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h4 className="font-bold text-primary text-sm mb-2">Need advice?</h4>
                <p className="text-xs text-muted-foreground mb-3">Our equipment specialists can help you design your ideal operatory.</p>
                <Button className="w-full text-xs" size="sm" asChild>
                  <a href="/contact">Talk to Sales</a>
                </Button>
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              {isLoading ? (
                <div className="h-64 flex items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
