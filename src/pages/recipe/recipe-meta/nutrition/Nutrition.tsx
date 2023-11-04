import useRecipe from "../../../../hooks/useRecipe";
import styles from "./nutrition.module.css";

export default function Nutrition() {
  const recipe = useRecipe();
  if (!recipe.nutrition) {
    return null;
  }
  return (
    <>
      <h2>Nutrition per serving</h2>
      <div className={styles.container}>
        <div className={styles.nutri}>
          <div className={styles.nutriValue}>
            <h3>{recipe.nutrition.calories}</h3>
          </div>
          <span>Calories</span>
        </div>
        <div className={styles.nutri}>
          <div className={styles.nutriValue}>
            <h3>{recipe.nutrition.carbohydrates}g</h3>
          </div>

          <span>Carbs</span>
        </div>
        <div className={styles.nutri}>
          <div className={styles.nutriValue}>
            <h3>{recipe.nutrition.fat}g</h3>
          </div>

          <span>Fat</span>
        </div>
        <div className={styles.nutri}>
          <div className={styles.nutriValue}>
            <h3>{recipe.nutrition.protein}g</h3>
          </div>

          <span>Protein</span>
        </div>
        <div className={styles.nutri}>
          <div className={styles.nutriValue}>
            <h3>{recipe.nutrition.sugar}g</h3>
          </div>

          <span>Sugar</span>
        </div>
        <div className={styles.nutri}>
          <div className={styles.nutriValue}>
            <h3>{recipe.nutrition.fiber}g</h3>
          </div>

          <span>Fiber</span>
        </div>
      </div>
    </>
  );
}
