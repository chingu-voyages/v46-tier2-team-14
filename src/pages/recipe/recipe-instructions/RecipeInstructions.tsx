import useRecipe from "../../../hooks/useRecipe";
import styles from "./recipe-instruction.module.css";

export default function RecipeInstructions() {
  const recipe = useRecipe();
  if (
    !recipe.instructions ||
    !Array.isArray(recipe.instructions) ||
    recipe.instructions.length === 0
  ) {
    return null;
  }
  return (
    <section className={styles.container}>
      <h2>Instructions</h2>
      <div className={styles.instructions}>
        <ol>
          {recipe.instructions.map((instruction) => (
            <li key={instruction.id}>{instruction.display_text}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
