import useMedia from "../../../hooks/useMedia";
import useRecipe from "../../../hooks/useRecipe";
import MetaBadges from "./meta-badges/MetaBadges";
import Nutrition from "./nutrition/Nutrition";
import styles from "./recipe-meta.module.css";
import TimeInfo from "./time-info/TimeInfo";

export default function RecipeMeta() {
  const recipe = useRecipe();
  const isBigScreen = useMedia("(min-width: 1024px");

  // view for tablet and up
  if (isBigScreen)
    return (
      <section className={styles.meta_lg}>
        <img src={recipe.thumbnail_url} alt="" className={styles.image} />

        <div className={styles.right}>
          <h1 className={styles.title}>{recipe.name}</h1>
          <MetaBadges />
          <TimeInfo />
          <p className={styles.description}>{recipe.description}</p>
          <Nutrition />
        </div>
      </section>
    );

  // view for mobile
  return (
    <section className={styles.meta_sm}>
      <h1 className={styles.title}>{recipe.name}</h1>
      <MetaBadges />
      <img src={recipe.thumbnail_url} alt="" className={styles.image} />
      <TimeInfo />
      <p className={styles.description}>{recipe.description}</p>
      <Nutrition />
    </section>
  );
}
