import { useContext } from "react";

import { RecipeContext } from "../context/RecipeContext";

export default function useRecipe() {
  const context = useContext(RecipeContext);

  if (context === null)
    throw new Error("useRecipe must be used within a RecipeProvider");

  return context;
}
