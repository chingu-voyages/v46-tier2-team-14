import styles from "./Skeleton.module.css";

export interface SkeletonI {
  width?: number | string;
  height?: number | string;
  type?: "circle" | "rectangle" | "rounded";
}

export default function Skeleton({ width, height, type }: SkeletonI) {
  return (
    <div
      className={`${styles.skeleton} ${type ? styles[type] : ""} `}
      aria-busy
      style={{
        width: typeof width === "number" ? `${width}rem` : width,
        height: typeof height === "number" ? `${height}rem` : height,
      }}
    />
  );
}

Skeleton.defaultProps = {
  width: "100%",
  height: "100%",
  type: "rounded",
};
