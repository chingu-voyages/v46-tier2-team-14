import { useState } from "react";
import { BsTags } from "react-icons/bs";

import Badge from "../../../components/badge/Badge";
import useRecipe from "../../../hooks/useRecipe";
import styles from "./recipe-categories.module.css";

const LIMIT = 10;

export default function RecipeCategories() {
  const { tags } = useRecipe();
  const [showMore, setShowMore] = useState(false);

  if (!tags || tags.length === 0) return null;

  const moreTagsAvailable = tags.length > LIMIT;

  return (
    <section className={styles.container}>
      <h2>
        <BsTags aria-hidden />
        Categories
      </h2>
      <div className={styles.tags}>
        {tags.slice(0, showMore ? tags.length : LIMIT).map((tag) => (
          <Badge key={tag.id}>{tag.display_name}</Badge>
        ))}
        {moreTagsAvailable && (
          <button
            type="button"
            className={styles.button}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "show less" : "...show more"}
          </button>
        )}
      </div>
    </section>
  );
}
