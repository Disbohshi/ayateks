import { type Product } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";

export function ProductCard({ product }: { product: Product }) {
  // Using generic images since we don't have real uploads yet
  // Using descriptive unsplash keywords
  const fallbackImage = "https://images.unsplash.com/photo-1590611936760-eeb9f5978ca6?auto=format&fit=crop&q=80&w=800"; 

  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-all duration-300 border-border/60 overflow-hidden group">
      <div className="aspect-[4/3] overflow-hidden relative bg-muted">
        <img 
          src={product.imageUrl || fallbackImage} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="backdrop-blur-sm bg-white/90 text-primary font-bold">
            {product.category}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl text-primary line-clamp-1">{product.name}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1">
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
          {product.description}
        </p>
        
        {product.features && product.features.length > 0 && (
          <ul className="space-y-1">
            {product.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                <Check className="h-3 w-3 text-secondary" /> {feature}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      
      <CardFooter>
        <Button className="w-full group" variant="outline" asChild>
          <Link href="/contact">
            Request Quote <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
