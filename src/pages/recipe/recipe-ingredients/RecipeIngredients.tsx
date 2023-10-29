import useRecipe from "../../../hooks/useRecipe";
import styles from "../recipe.module.css";

export default function RecipeIngredients() {
  const recipe = useRecipe();
  if (
    !recipe.sections ||
    !Array.isArray(recipe.sections) ||
    recipe.sections.length === 0
  ) {
    return null;
  }
  return (
    <section>
      <h2>Ingredients</h2>
      <div className={styles.instructions}>
        <ul>
          {recipe.sections.map((section) =>
            section.components &&
            Array.isArray(section.components) &&
            section.components.length > 0
              ? section.components.map((component) => (
                  <li key={component.id}>{component.raw_text}</li>
                ))
              : null,
          )}
        </ul>
      </div>
    </section>
  );
}
