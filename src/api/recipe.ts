import axios from "./axios";

export default async function fetchRecipe(
  id: string,
  options?: { signal?: AbortSignal },
) {
  const response = await axios.get(`/recipes/get-more-info`, {
    params: { id },
    signal: options?.signal,
  });
  return response.data;
}
