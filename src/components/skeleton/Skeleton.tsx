import styles from "./Skeleton.module.css";

interface SkeletonI {
  width?: number;
  height?: number;
  type?: "circle" | "rectangle" | "rounded";
}

export default function Skeleton({ width, height, type }: SkeletonI) {
  return (
    <div
      className={`${styles.skeleton} ${type ? styles[type] : ""} `}
      aria-busy
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
      }}
    />
  );
}

Skeleton.defaultProps = {
  width: 10,
  height: 10,
  type: "rounded",
};
