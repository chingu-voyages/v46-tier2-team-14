import { MdClear } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

import useSearchRecipes from "../../hooks/useSearchRecipe";
import styles from "./recipe-list.module.css";
import RecipePreview from "./recipe-preview/RecipePreview";

export default function RecipeList() {
  const { searchText } = useParams();
  const { data } = useSearchRecipes({
    from: 0,
    size: 20,
    q: searchText,
    tags: searchText ? undefined : "under_30_minutes",
  });

  const navigate = useNavigate();

  const handelClear = () => {
    navigate("/");
  };
  return (
    <section className={styles.container}>
      {searchText ? (
        <div className={styles.header}>
          <h2 className={styles.title}>👀 Search results for: {searchText}</h2>
          <button
            type="button"
            className={styles.clearButton}
            onClick={handelClear}
            title="Clear Search"
          >
            <MdClear size={24} />
          </button>
        </div>
      ) : (
        <h2 className={styles.title}>👀 Recipes under 30 min </h2>
      )}
      <ul className={styles.list}>
        {data?.map(({ id, thumbnail_url, name }) => (
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
