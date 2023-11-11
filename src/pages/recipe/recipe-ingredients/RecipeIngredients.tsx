import { BsArrowReturnRight } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

import { Measurement } from "../../../api/recipe.types";
import useRecipe from "../../../hooks/useRecipe";
import styles from "./recipe-ingredients.module.css";

type Props = { measurements: Measurement[] | null };
function IngredientMeasurement({ measurements }: Props) {
  // prefer metric over others
  const preferredMeasurement =
    measurements && measurements.length
      ? measurements.find(
          (measurement) => measurement.unit.system === "metric",
        ) || measurements[0]
      : null;

  return (
    <p className={styles.measurement}>
      {preferredMeasurement?.quantity && preferredMeasurement?.quantity !== "0"
        ? `${preferredMeasurement?.quantity}  ${preferredMeasurement?.unit.abbreviation}`
        : null}
    </p>
  );
}

export default function RecipeIngredients() {
  const { sections } = useRecipe();

  // return null when no ingredients
  if (!sections || sections.length === 0) return null;

  return (
    <section className={styles.container}>
      <h2>
        <MdOutlineLocalGroceryStore aria-hidden />
        Ingredients
      </h2>
      <div className={styles.sections}>
        {sections.map((section) => (
          <div key={section.name} className={styles.section}>
            {section.name && (
              <div className={styles.title}>
                <BsArrowReturnRight aria-hidden className={styles.icon} />
                <span className={styles.text}>{section.name}</span>
              </div>
            )}

            <ul className={styles.components}>
              {section.components?.map((component) => (
                <li key={component.id} className={styles.component}>
                  <label
                    htmlFor={component.id.toString()}
                    className={styles.label}
                  >
                    <div>
                      <input
                        type="checkbox"
                        id={component.id.toString()}
                        className={styles.checkbox}
                        style={{ cursor: "pointer" }}
                      />
                      <FaCheck className={styles.custom} aria-hidden />
                    </div>
                    <div className={styles.ingredient}>
                      <p className={styles.name}>{component.ingredient.name}</p>
                      {component.extra_comment && (
                        <p className={styles.comment}>
                          {component.extra_comment}
                        </p>
                      )}
                    </div>
                    <IngredientMeasurement
                      measurements={component.measurements}
                    />
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
