import Badge from "../../../components/badge/Badge";
import useRecipe from "../../../hooks/useRecipe";
import styles from "./recipe-categories.module.css";

export default function RecipeCategories() {
  const { tags } = useRecipe();
  if (!tags || tags.length === 0) return null;

  return (
    <section className={styles.container}>
      <h2 className="sr-only">Categories</h2>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <Badge key={tag.id}>{tag.display_name}</Badge>
        ))}
      </div>
    </section>
  );
}
