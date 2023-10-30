import { AiOutlineLike } from "react-icons/ai";
import { BiBowlHot, BiLinkExternal } from "react-icons/bi";

import Badge from "../../../../components/badge/Badge";
import useRecipe from "../../../../hooks/useRecipe";
import styles from "./meta-badges.module.css";

export default function MetaBadges() {
  const recipe = useRecipe();

  return (
    <div className={styles.badges}>
      {recipe.num_servings && (
        <Badge>
          <BiBowlHot aria-hidden />
          {recipe.num_servings}{" "}
          {recipe.num_servings > 1
            ? recipe.servings_noun_plural
            : recipe.servings_noun_singular}
        </Badge>
      )}
      {recipe.user_ratings && (
        <Badge>
          <AiOutlineLike aria-hidden />
          {new Intl.NumberFormat("en-US", { style: "percent" }).format(
            recipe.user_ratings.count_positive /
              (recipe.user_ratings.count_positive +
                recipe.user_ratings.count_negative),
          )}{" "}
          would make again
        </Badge>
      )}
      {recipe.original_video_url && (
        <Badge as="a" href={recipe.original_video_url} target="_blank">
          <BiLinkExternal aria-hidden /> watch video
        </Badge>
      )}
    </div>
  );
}
