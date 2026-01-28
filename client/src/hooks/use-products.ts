import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

export function useProducts(category?: string) {
  return useQuery({
    queryKey: [api.products.list.path, category],
    queryFn: async () => {
      // Construct URL with query param manually since buildUrl is for path params
      const url = new URL(api.products.list.path, window.location.origin);
      if (category) {
        url.searchParams.append('category', category);
      }
      
      const res = await fetch(url.toString());
      if (!res.ok) throw new Error('Failed to fetch products');
      return api.products.list.responses[200].parse(await res.json());
    },
  });
}
