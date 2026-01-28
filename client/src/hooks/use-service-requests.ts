import { useMutation } from "@tanstack/react-query";
import { api, type InsertServiceRequest } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateServiceRequest() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertServiceRequest) => {
      const res = await fetch(api.serviceRequests.create.path, {
        method: api.serviceRequests.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to submit service request');
      }
      
      return api.serviceRequests.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Request Submitted",
        description: "Your service request has been logged. Our dispatch team will contact you to confirm.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
