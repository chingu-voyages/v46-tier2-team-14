import axios from "./axios";

export default async function autoCompleteSuggestion(
  searchText: string,
  options?: { signal?: AbortSignal },
) {
  const response = await axios.get(`/recipes/auto-complete`, {
    params: { prefix: searchText },
    signal: options?.signal,
  });
  return response.data.results;
}
