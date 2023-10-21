import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // todo: infinity for now, might change later
    },
  },
});

// results are cached in-memory for now, invalidated on page refresh
// check for persistence: https://tanstack.com/query/latest/docs/react/plugins/persistQueryClient

export default queryClient;
