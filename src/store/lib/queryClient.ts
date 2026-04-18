import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false, // prevents refetch on tab switch
      retry: 1, // retry failed request once
    },
    mutations: {
      retry: 0, // don't retry mutations by default
    },
  },
});