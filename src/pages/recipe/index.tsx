import RecipeProvider from "../../context/RecipeContext";
import Recipe from "./Recipe";

export default function Root() {
  return (
    <RecipeProvider>
      <Recipe />
    </RecipeProvider>
  );
}
