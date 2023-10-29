// import styles from "./nutrition.module.css";

// interface NutritionProps {
//   nutrition: {
//     protein: number;
//     fat: number;
//     calories: number;
//     sugar: number;
//     carbohydrates: number;
//     fiber: number;
//   };
// }

// function Nutrition({ nutrition }: NutritionProps) {
//   return (
//     <>
//       <h2>Nutrition per serving</h2>
//       <div className={styles.container}>
//         <div className={styles.nutri}>
//           <span>Calories</span>
//           <h3>{nutrition.calories}Kcal</h3>
//         </div>
//         <div className={styles.nutri}>
//           <span>Carbs</span>
//           <h3>{nutrition.carbohydrates}gm</h3>
//         </div>
//         <div className={styles.nutri}>
//           <span>Fat</span>
//           <h3>{nutrition.fat}gm</h3>
//         </div>
//         <div className={styles.nutri}>
//           <span>Protein</span>
//           <h3>{nutrition.protein}gm</h3>
//         </div>
//         <div className={styles.nutri}>
//           <span>Sugar</span>
//           <h3>{nutrition.sugar}gm</h3>
//         </div>
//         <div className={styles.nutri}>
//           <span>Fiber</span>
//           <h3>{nutrition.fiber}gm</h3>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Nutrition;

import useRecipe from "../../../../hooks/useRecipe";
import styles from "./nutrition.module.css";

// interface NutritionProps {
//   nutrition: {
//     protein: number;
//     fat: number;
//     calories: number;
//     sugar: number;
//     carbohydrates: number;
//     fiber: number;
//   };
// }

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
          <span>Calories</span>
          <h3>{recipe.nutrition.calories}Kcal</h3>
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
    </>
  );
}
