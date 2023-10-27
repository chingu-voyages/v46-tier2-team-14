import RecipeProvider from "../../context/RecipeContext";
import styles from "./recipe.module.css";
import RecipeIngredients from "./recipe-ingredients/RecipeIngredients";
import RecipeInstructions from "./recipe-instructions/RecipeInstructions";
import RecipeMeta from "./recipe-meta/RecipeMeta";

export default function Recipe() {
  return (
    <main className={styles.recipe}>
      <RecipeProvider>
        <RecipeMeta />
        <RecipeIngredients />
        <RecipeInstructions />
      </RecipeProvider>
    </main>
  );
}
