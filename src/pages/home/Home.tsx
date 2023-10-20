import RecipeList from "../../components/recipe-list/RecipeList";
import data from "../../util/data.json";
import Hero from "./hero/Hero";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <RecipeList recipes={data} query="Cheese" />
      {/* TODO: component for under 30mins recipes here */}
    </main>
  );
}
