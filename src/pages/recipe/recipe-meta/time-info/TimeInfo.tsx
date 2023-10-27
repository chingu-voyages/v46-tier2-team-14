import { FiClock } from "react-icons/fi";

import useRecipe from "../../../../hooks/useRecipe";
import styles from "./time-info.module.css";

function readableTime(minutes: number) {
  const hours = Math.floor(minutes / 60);
  if (hours) {
    const remainingMinutes = minutes % 60;
    return [`${hours}h`, remainingMinutes ? `${remainingMinutes}m` : ""].join(
      " ",
    );
  }
  return `${minutes}m`;
}

export default function TimeInfo() {
  const recipe = useRecipe();

  const prep = recipe.prep_time_minutes || 0;
  const cook = recipe.cook_time_minutes || 0;
  const total = recipe.total_time_minutes || prep + cook;

  const showThree = Boolean(prep || cook);
  const showTier = Boolean(
    !showThree && recipe.total_time_tier && recipe.total_time_tier.display_tier,
  );

  if (showThree || showTier)
    return (
      <section className={styles.container}>
        <h2 className="sr-only">Recipe Times</h2>
        <FiClock aria-hidden />
        {showThree && (
          <dl className={styles.times}>
            <div>
              <dt>Prep</dt>
              <dd>{readableTime(prep)}</dd>
            </div>
            <div>
              <dt>Cook</dt>
              <dd>{readableTime(cook)}</dd>
            </div>
            <div>
              <dt>Total</dt>
              <dd>{readableTime(total)}</dd>
            </div>
          </dl>
        )}
        {showTier && (
          <p className={styles.tier}>{recipe.total_time_tier?.display_tier}</p>
        )}
      </section>
    );

  // no time data present (not searching through tags)
  return null;
}
