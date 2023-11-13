import { createContext } from "react";
import { useParams } from "react-router-dom";

import { Recipe } from "../api/recipe.types";
import { GoHome, TryAgain } from "../components/error/Error";
import useRecipeQuery from "../hooks/useRecipeQuery";
import RecipeSkeleton from "../pages/recipe/recipe-skeleton/RecipeSkeleton";
// import recipeJson from "../data/recipe.json";

export const RecipeContext = createContext<Recipe | null>(null);
RecipeContext.displayName = "RecipeContext";

type Props = { children: React.ReactNode };

export default function RecipeProvider({ children }: Props) {
  const { recipeId } = useParams();
  if (!recipeId) throw Error("recipeId required");

  const { isLoading, data, isError, refetch } = useRecipeQuery(recipeId);

  if (isLoading) return <RecipeSkeleton />;
  if (isError) return <TryAgain onRetry={refetch} />;
  if (!data)
    return <GoHome message="The recipe you are looking for does not exist" />;

  return (
    <RecipeContext.Provider value={data}>{children}</RecipeContext.Provider>
  );
}

// for dev with dummy data
// export default function RecipeProvider({ children }: Props) {
//   return (
//     <RecipeContext.Provider value={recipeJson}>
//       {children}
//     </RecipeContext.Provider>
//   );
// }
