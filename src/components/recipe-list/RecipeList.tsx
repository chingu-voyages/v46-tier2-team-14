import { Recipe } from "../../types/recipe.types";
import styles from "./recipe-list.module.css";
import RecipePreview from "./recipe-preview/RecipePreview";

type Props = {
  recipes: Recipe[];
  query: string;
};

export default function RecipeList({ recipes, query }: Props) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>👀 Search results for: {query}</h2>
      <ul className={styles.list}>
        {recipes.map(({ id, thumbnail_url, name }) => (
          <RecipePreview
            key={id}
            id={id}
            name={name}
            thumbnail_url={thumbnail_url}
          />
        ))}
      </ul>
    </section>
  );
}
