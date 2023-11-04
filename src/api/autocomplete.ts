import axios from "./axios";

export default async function autoCompleteSuggestion(
  searchText: string,
  options?: { signal?: AbortSignal },
) {
  console.log("calling api", searchText, options?.signal);
  const response = await axios.get(`/recipes/auto-complete`, {
    params: { prefix: searchText },
    signal: options?.signal,
  });
  console.log(response, "resopnse");
  return response.data.results;
}
