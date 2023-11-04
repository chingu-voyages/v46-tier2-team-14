import { useQuery } from "@tanstack/react-query";

import searchrecipes, { RecipeSearchParams } from "../api/searchRecipes";
import { Recipe } from "../types/recipe.types";

export default function useSearchRecipes({ ...props }: RecipeSearchParams) {
  return useQuery<Recipe[]>({
    queryKey: ["searchRecipes", JSON.stringify(props)],
    queryFn: ({ signal }) => searchrecipes({ ...props }, { signal }),
    retry: 0,
    enabled: !!props.q,
  });
}
