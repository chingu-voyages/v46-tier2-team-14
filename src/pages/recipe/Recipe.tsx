import RecipeProvider from "../../context/RecipeContext";
import styles from "./recipe.module.css";
import RecipeCategories from "./recipe-categories/RecipeCategories";
import RecipeIngredients from "./recipe-ingredients/RecipeIngredients";
import RecipeInstructions from "./recipe-instructions/RecipeInstructions";
import RecipeMeta from "./recipe-meta/RecipeMeta";

export default function Recipe() {
  return (
    <main className={styles.recipe}>
      <RecipeProvider>
        <RecipeCategories />
        <RecipeMeta />
        <RecipeIngredients />
        <RecipeInstructions />
      </RecipeProvider>
    </main>
  );
}
