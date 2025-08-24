import { QueryClient } from "@tanstack/react-query";

// Mock data function to simulate API responses
export const mockData = {
  products: [
    { id: 1, name: "Premium Dupatta", price: 2500, category: "Formal" },
    { id: 2, name: "Casual Dupatta", price: 1800, category: "Casual" },
    { id: 3, name: "Wedding Dupatta", price: 3500, category: "Bridal" },
    { id: 4, name: "Embroidered Dupatta", price: 2800, category: "Formal" }
  ],
  users: [
    { id: 1, name: "User 1", email: "user1@example.com" }
  ]
};

// Simulated API request function
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  console.log(`Mock API request: ${method} ${url}`, data);
  
  // Simulate successful response
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
