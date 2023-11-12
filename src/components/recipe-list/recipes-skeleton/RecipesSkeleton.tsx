import Skeleton from "../../skeleton/Skeleton";
import styles from "./recipes-skeleton.module.css";

type Props = { length: number };

export default function RecipesSkeleton({ length }: Props) {
  return (
    <ul className={styles.list}>
      {new Array(length).fill(null).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li className={styles.recipe} key={index}>
          <div className={styles.wrapper}>
            <Skeleton />
          </div>
          <Skeleton height={1.5} /> <Skeleton height={1} width="50%" />{" "}
        </li>
      ))}
    </ul>
  );
}
