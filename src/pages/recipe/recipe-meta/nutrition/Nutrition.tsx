import styles from "./nutrition.module.css";

export default function Nutrition() {
  return (
    <>
      <h2>Nutrition per serving</h2>
      <div className={styles.container}>
        <div className={styles.nutri}>
          <span>Calories</span>
          <h3>50 Kcal</h3>
        </div>
        <div className={styles.nutri}>
          <span>Carbs</span>
          <h3>1 gm</h3>
        </div>
        <div className={styles.nutri}>
          <span>Fat</span>
          <h3>4 gm</h3>
        </div>
        <div className={styles.nutri}>
          <span>Protein</span>
          <h3>7 gm</h3>
        </div>
        <div className={styles.nutri}>
          <span>Sugar</span>
          <h3>8 gm</h3>
        </div>
        <div className={styles.nutri}>
          <span>Fiber</span>
          <h3>6 gm</h3>
        </div>
      </div>
    </>
  );
}
