import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // todo: infinity for now, might change later
    },
  },
});

export default queryClient;
