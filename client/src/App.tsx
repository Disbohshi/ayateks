import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import NotFound from "@/pages/not-found";

// Pages
import Home from "@/pages/Home";
import EquipmentSales from "@/pages/EquipmentSales";
import ServiceRepairs from "@/pages/ServiceRepairs";
import Maintenance from "@/pages/Maintenance";
import Financing from "@/pages/Financing";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/equipment" component={EquipmentSales} />
      <Route path="/service" component={ServiceRepairs} />
      <Route path="/maintenance" component={Maintenance} />
      <Route path="/financing" component={Financing} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
