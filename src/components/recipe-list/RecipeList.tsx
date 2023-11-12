import { useEffect, useRef, useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

import useSearchRecipes from "../../hooks/useSearchRecipe";
import { Recipe } from "../../types/recipe.types";
import styles from "./recipe-list.module.css";
import RecipePreview from "./recipe-preview/RecipePreview";

// type Props = {
//   recipes: Recipe[];
//   query: string;
// };

// export default function RecipeList({ recipes, query }: Props) {
const SHOW_RECIPE_PER_LOAD = 20;
const SHOW_RECIPE_ON_INITIAL_LOAD = 20;
const BUFFER_SCROLL_HEIGHT = 151;
export default function RecipeList() {
  const { searchText } = useParams();
  const [start, setStart] = useState<number>(0);
  const [moveToTop, setMoveToTop] = useState<boolean>(false);
  const { data } = useSearchRecipes({
    from: start,
    size: SHOW_RECIPE_ON_INITIAL_LOAD,
    q: searchText,
    tags: searchText ? undefined : "under_30_minutes",
  });
  const [recipeToShow, setRecipeToShow] = useState<Recipe[] | []>([]);
  const navigate = useNavigate();
  const recipeListRef = useRef<HTMLUListElement>(null);
  const recipePreviewRef = useRef<HTMLUListElement>(null);

  const handelClear = () => {
    navigate("/");
  };

  const onLoadMore = () => {
    const allRecipe = data && recipeToShow ? [...recipeToShow, ...data] : [];
    setRecipeToShow(allRecipe);
  };
  const handleShowMoreRecipe = () => {
    onLoadMore();
    setMoveToTop(true);
    setStart(start + SHOW_RECIPE_PER_LOAD);
  };

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    const headerElement = document.getElementById("header");
    const heroElement = document.getElementById("hero");
    const totalScrollHeight =
      headerElement && heroElement && recipePreviewRef.current
        ? headerElement.scrollHeight +
          heroElement.scrollHeight +
          recipePreviewRef.current.scrollHeight
        : 0;
    console.log(totalScrollHeight);
    if (position > totalScrollHeight + BUFFER_SCROLL_HEIGHT) {
      setMoveToTop(true);
    } else if (position < totalScrollHeight + BUFFER_SCROLL_HEIGHT) {
      setMoveToTop(false);
    }
  };
  useEffect(() => {
    if (data) {
      setRecipeToShow(data);
    }
  }, [data]);

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
    return () => window.removeEventListener("scroll", handleVisibleButton);
  }, []);

  const handleScrollToTop = () => {
    recipeListRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
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
      <ul className={styles.list} ref={recipeListRef}>
        {recipeToShow?.map(({ id, thumbnail_url, name }) => (
          <RecipePreview
            key={id}
            id={id}
            name={name}
            thumbnail_url={thumbnail_url}
            ref={recipePreviewRef}
          />
        ))}
      </ul>
      {recipeToShow.length > 0 && (
        <div className={styles.moveToLoad}>
          <button
            type="button"
            onClick={handleShowMoreRecipe}
            className={styles.moveToLoadButton}
          >
            Load More
          </button>
        </div>
      )}
      {moveToTop && (
        <div className={styles.moveToTop}>
          <button
            type="button"
            className={styles.moveToTopButton}
            onClick={handleScrollToTop}
          >
            <BsArrowUpCircle size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
