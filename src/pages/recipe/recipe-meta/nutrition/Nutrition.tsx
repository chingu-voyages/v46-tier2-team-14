import styles from "./nutrition.module.css";

export default function Nutrition() {
  return (
    <>
      <h2>Nutrition per serving</h2>
      <section className={styles.container}>
        <ul>
          <span>Calories</span>
          <h3>50</h3>
        </ul>
        <ul>
          <span>Carbs</span>
          <h3>1</h3>
        </ul>
        <ul>
          <span>Fat</span>
          <h3>4</h3>
        </ul>
        <ul>
          <span>Protein</span>
          <h3>7</h3>
        </ul>
        <ul>
          <span>Sugar</span>
          <h3>8</h3>
        </ul>
        <ul>
          <span>Fiber</span>
          <h3>6</h3>
        </ul>
      </section>
    </>
  );
}
