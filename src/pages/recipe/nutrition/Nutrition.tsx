import { IoNutritionOutline } from "react-icons/io5";

import useRecipe from "../../../hooks/useRecipe";
import styles from "./nutrition.module.css";

export default function Nutrition() {
  const recipe = useRecipe();
  if (!recipe.nutrition) {
    return null;
  }
  return (
    <section className={styles.container}>
      <h2>
        <IoNutritionOutline aria-hidden />
        Nutrition per serving
      </h2>
      <div className={styles.nutritions}>
        <div className={styles.nutri}>
          <span>Calories</span>
          <h3>{recipe.nutrition.calories} </h3>
        </div>
        <div className={styles.nutri}>
          <span>Carbs</span>
          <h3>{recipe.nutrition.carbohydrates}gm</h3>
        </div>
        <div className={styles.nutri}>
          <span>Fat</span>
          <h3>{recipe.nutrition.fat}gm</h3>
        </div>
        <div className={styles.nutri}>
          <span>Protein</span>
          <h3>{recipe.nutrition.protein}gm</h3>
        </div>
        <div className={styles.nutri}>
          <span>Sugar</span>
          <h3>{recipe.nutrition.sugar}gm</h3>
        </div>
        <div className={styles.nutri}>
          <span>Fiber</span>
          <h3>{recipe.nutrition.fiber}gm</h3>
        </div>
      </div>
    </section>
  );
}
