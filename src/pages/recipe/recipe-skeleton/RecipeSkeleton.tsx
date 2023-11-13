import Skeleton from "../../../components/skeleton/Skeleton";
import useMedia from "../../../hooks/useMedia";
import styles from "./recipe-skeleton.module.css";

export default function RecipeSkeleton() {
  const isBigScreen = useMedia("(min-width: 1024px)");

  if (isBigScreen)
    return (
      <main className={styles.recipe}>
        <div className={styles.left}>
          <Skeleton height="400px" />
          <Skeleton height="38rem" />
        </div>
        <div className={styles.right}>
          <div className={styles.meta}>
            <Skeleton height="3rem" />
            <div className={styles.badges}>
              <Skeleton width="5rem" height="1.1rem" />
              <Skeleton width="5rem" height="1.1rem" />
              <Skeleton width="5rem" height="1.1rem" />
            </div>
          </div>
          <Skeleton height="2rem" />
          <Skeleton height="8rem" />
          <div className={styles.nutritions}>
            <Skeleton width="5rem" height="8rem" />
            <Skeleton width="5rem" height="8rem" />
            <Skeleton width="5rem" height="8rem" />
            <Skeleton width="5rem" height="8rem" />
            <Skeleton width="5rem" height="8rem" />
          </div>
          <Skeleton height="10rem" />
          <Skeleton height="20rem" />
        </div>
      </main>
    );

  return (
    <main className={styles.recipe}>
      <div className={styles.meta}>
        <Skeleton height="3rem" />
        <div className={styles.badges}>
          <Skeleton width="5rem" height="1.1rem" />
          <Skeleton width="5rem" height="1.1rem" />
          <Skeleton width="5rem" height="1.1rem" />
        </div>
        <div className={styles.wrapper}>
          <Skeleton />
        </div>
        <Skeleton height="2rem" />
        <Skeleton height="8rem" />
      </div>
      <div className={styles.nutritions}>
        <Skeleton width="5rem" height="8rem" />
        <Skeleton width="5rem" height="8rem" />
        <Skeleton width="5rem" height="8rem" />
        <Skeleton width="5rem" height="8rem" />
        <Skeleton width="5rem" height="8rem" />
      </div>
      <Skeleton height="10rem" />
      <Skeleton height="38rem" />
      <Skeleton height="20rem" />
    </main>
  );
}
