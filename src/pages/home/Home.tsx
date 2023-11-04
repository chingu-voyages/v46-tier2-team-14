import { useLocation } from "react-router-dom";

import RecipeList from "../../components/recipe-list/RecipeList";
// import recipes from "../../data/recipes.json";
import useSearchRecipes from "../../hooks/useSearchRecipe";
import Hero from "./hero/Hero";
import styles from "./home.module.css";

export default function Home() {
  const location = useLocation();
  const { data, isLoading } = useSearchRecipes({
    from: 0,
    size: 20,
    q: location.state?.searchText,
  });

  console.log("HOME", isLoading, location.state?.searchText);

  return (
    <main className={styles.main}>
      <Hero />
      <RecipeList recipes={data || []} query={location.state?.searchText} />
      {/* TODO: component for under 30mins recipes here */}
    </main>
  );
}
