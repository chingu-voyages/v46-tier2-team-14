import { createContext } from "react";
import { useParams } from "react-router-dom";

import { Recipe } from "../api/recipe.types";
import useRecipeQuery from "../hooks/useRecipeQuery";
// import recipeJson from "../data/recipe.json";

export const RecipeContext = createContext<Recipe | null>(null);
RecipeContext.displayName = "RecipeContext";

type Props = { children: React.ReactNode };

export default function RecipeProvider({ children }: Props) {
  const { recipeId } = useParams();
  if (!recipeId) throw Error("recipeId required");

  const { isLoading, data, isError } = useRecipeQuery(recipeId);

  if (isLoading) return <p>loading...</p>; // todo: skeleton
  if (isError) return <p>something went wrong</p>; // todo: better error
  if (!data) return <p>recipe does not exist</p>; // todo: 204 no content

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
