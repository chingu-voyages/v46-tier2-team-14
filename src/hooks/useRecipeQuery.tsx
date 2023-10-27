import { useQuery } from "@tanstack/react-query";

import fetchRecipe from "../api/recipe";
import { Recipe } from "../api/recipe.types";

export default function useGetRecipe(id: string) {
  return useQuery<Recipe, Error>({
    queryKey: ["recipe", id],
    queryFn: ({ signal }) => fetchRecipe(id, { signal }),
    retry: 3,
  });
}

// research: https://tkdodo.eu/blog/type-safe-react-query
