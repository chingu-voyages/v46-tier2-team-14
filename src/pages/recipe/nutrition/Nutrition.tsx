import { IoNutritionOutline } from "react-icons/io5";

import useRecipe from "../../../hooks/useRecipe";
import styles from "./nutrition.module.css";

export default function Nutrition() {
  const recipe = useRecipe();
  if (!recipe.nutrition) {
    return null;
  }
  const values = [
    { label: "Calories", value: recipe.nutrition.calories, units: "" },
    { label: "Carbs", value: recipe.nutrition.carbohydrates, units: "gm" },
    { label: "Fat", value: recipe.nutrition.fat, units: "gm" },
    { label: "Protien", value: recipe.nutrition.protein, units: "gm" },
    { label: "Sugar", value: recipe.nutrition.sugar, units: "gm" },
    { label: "Fiber", value: recipe.nutrition.fiber, units: "gm" },
  ];

  return (
    <section className={styles.container}>
      <h2>
        <IoNutritionOutline aria-hidden />
        Nutrition per serving
      </h2>
      <div className={styles.nutritions}>
        {values.map(({ label, value, units }) => (
          <div className={styles.nutri} key={label}>
            <span>{label}</span>
            <h3>{value !== undefined ? `${value}${units}` : "-"}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
