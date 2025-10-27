import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1 * 60 * 1000,
      gcTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnReconnect: true, // 앱이 다시 온라인이면 재요청 허용
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});
