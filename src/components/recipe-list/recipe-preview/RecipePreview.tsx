/* eslint-disable prefer-arrow-callback */
import { forwardRef, Ref } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import useImageLoaded from "../../../hooks/useImageLoaded";
import { Recipe } from "../../../types/recipe.types";
import Skeleton from "../../skeleton/Skeleton";
import styles from "./recipe-preview.module.css";

const RecipePreview = forwardRef(function RecipePreview(
  { id, name, thumbnail_url }: Recipe,
  ref,
) {
  const isImageLoaded = useImageLoaded(thumbnail_url);

  return (
    <Link
      to={`recipe/${id}`}
      className={styles.recipe}
      ref={ref as unknown as Ref<HTMLAnchorElement>}
    >
      {isImageLoaded ? (
        <img
          src={thumbnail_url}
          alt={name}
          width="300"
          height="300"
          className={styles.img}
          aria-hidden
        />
      ) : (
        <div className={styles.skeleton_wrapper}>
          <Skeleton width="100%" height="100%" />
        </div>
      )}
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <BsArrowUpRight className={styles.arrow} size={20} />
      </div>
    </Link>
  );
});

export default RecipePreview;
