import { useParams } from "react-router-dom";

import RecipeList from "../../components/recipe-list/RecipeList";
// import recipes from "../../data/recipes.json";
import useSearchRecipes from "../../hooks/useSearchRecipe";
import Hero from "./hero/Hero";
import styles from "./home.module.css";

export default function Home() {
  const { searchText } = useParams();
  const { data } = useSearchRecipes({
    from: 0,
    size: 20,
    q: searchText,
  });

  return (
    <main className={styles.main}>
      <Hero />
      <RecipeList recipes={data || []} query={searchText ?? ""} />
      {/* TODO: component for under 30mins recipes here */}
    </main>
  );
}
