import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import { Recipe } from "../../../api/recipe.types";
import useImageLoaded from "../../../hooks/useImageLoaded";
import Skeleton from "../../skeleton/Skeleton";
import styles from "./recipe-preview.module.css";

type Props = Pick<Recipe, "id" | "name" | "thumbnail_url">;

export default function RecipePreview({ id, name, thumbnail_url }: Props) {
  const isImageLoaded = useImageLoaded(thumbnail_url);

  return (
    <Link to={`/recipe/${id}`} className={styles.recipe}>
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
}
