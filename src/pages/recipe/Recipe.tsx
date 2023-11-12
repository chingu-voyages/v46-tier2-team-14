import Skeleton from "../../components/skeleton/Skeleton";
import useImageLoaded from "../../hooks/useImageLoaded";
import useMedia from "../../hooks/useMedia";
import useRecipe from "../../hooks/useRecipe";
import MetaBadges from "./meta-badges/MetaBadges";
import Nutrition from "./nutrition/Nutrition";
import styles from "./recipe.module.css";
import Categories from "./recipe-categories/RecipeCategories";
import RecipeIngredients from "./recipe-ingredients/RecipeIngredients";
import RecipeInstructions from "./recipe-instructions/RecipeInstructions";
import TimeInfo from "./time-info/TimeInfo";

export default function Recipe() {
  const isBigScreen = useMedia("(min-width: 1024px)");
  const recipe = useRecipe();
  const isImageLoaded = useImageLoaded(recipe.thumbnail_url);

  if (isBigScreen)
    return (
      <main className={styles.recipe}>
        <div className={styles.left}>
          {isImageLoaded ? (
            <img
              src={recipe.thumbnail_url}
              alt={recipe.name}
              className={styles.image}
            />
          ) : (
            <Skeleton width="401px" height="401px" />
          )}
          <RecipeIngredients />
        </div>
        <div className={styles.right}>
          <div className={styles.meta}>
            <h1 className={styles.title}>{recipe.name}</h1>
            <MetaBadges />
            <TimeInfo />
            <p className={styles.description}>{recipe.description}</p>
          </div>
          <Nutrition />
          <Categories />
          <RecipeInstructions />
        </div>
      </main>
    );

  return (
    <main className={styles.recipe}>
      <div className={styles.meta}>
        <h1 className={styles.title}>{recipe.name}</h1>
        <MetaBadges />
        <img
          src={recipe.thumbnail_url}
          alt={recipe.name}
          className={styles.image}
        />
        <TimeInfo />
        <p className={styles.description}>{recipe.description}</p>
      </div>

      <Nutrition />
      <Categories />
      <RecipeIngredients />
      <RecipeInstructions />
    </main>
  );
}
