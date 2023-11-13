import { useQuery } from "@tanstack/react-query";

import { Recipe } from "../api/recipe.types";
import searchrecipes, { RecipeSearchParams } from "../api/searchRecipes";

export default function useSearchRecipes({ ...props }: RecipeSearchParams) {
  return useQuery<Recipe[]>({
    queryKey: ["searchRecipes", JSON.stringify(props)],
    queryFn: ({ signal }) => searchrecipes({ ...props }, { signal }),
    retry: 0,
    enabled: !!props.q || !!props.tags,
  });
}
