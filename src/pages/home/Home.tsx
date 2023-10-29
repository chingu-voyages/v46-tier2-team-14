import RecipeList from "../../components/recipe-list/RecipeList";
import recipes from "../../data/recipes.json";
import Hero from "./hero/Hero";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <RecipeList recipes={recipes} query="Cheese" />
      {/* TODO: component for under 30mins recipes here */}
    </main>
  );
}
