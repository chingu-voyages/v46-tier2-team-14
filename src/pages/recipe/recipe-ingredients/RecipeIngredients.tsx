import useRecipe from "../../../hooks/useRecipe";
import styles from "./recipe-ingredients.module.css";

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
      <div className={styles.ingrediants}>
        {recipe.sections.map((section) => (
          <div key={section.position} className={styles.sectionsdiv}>
            <h2>{section.name}</h2>
            <ul>
              {section.components &&
                Array.isArray(section.components) &&
                section.components.map((component) => (
                  <li key={component.id}>{component.raw_text}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
