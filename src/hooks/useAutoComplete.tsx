import { useQuery } from "@tanstack/react-query";

import autoCompleteSuggestion from "../api/autocomplete";

export default function useAutoComplete(searchText: string) {
  return useQuery({
    queryKey: ["autocomplete", searchText],
    queryFn: ({ signal }) => autoCompleteSuggestion(searchText, { signal }),
    retry: 3,
  });
}
