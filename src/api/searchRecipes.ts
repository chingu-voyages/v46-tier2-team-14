import axios from "./axios";

export type RecipeSearchParams = {
  from: number;
  size: number;
  q?: string;
};

export default async function searchrecipes(
  recipeParams: RecipeSearchParams,
  options?: { signal?: AbortSignal },
) {
  const response = await axios.get(`/recipes/list`, {
    params: recipeParams,
    signal: options?.signal,
  });
  return response.data.results;
}
