import styles from "./Skeleton.module.css";

export interface SkeletonI {
  width?: number | string;
  height?: number | string;
  type?: "circle" | "rectangle" | "rounded";
  radius?: number | string;
}

export default function Skeleton({ width, height, type, radius }: SkeletonI) {
  return (
    <div
      className={`${styles.skeleton} ${type ? styles[type] : ""} `}
      aria-busy
      style={{
        width: typeof width === "number" ? `${width}rem` : width,
        height: typeof height === "number" ? `${height}rem` : height,
        borderRadius: typeof radius === "number" ? `${radius}rem` : radius,
      }}
    />
  );
}

Skeleton.defaultProps = {
  width: "100%",
  height: "100%",
  type: "rounded",
};
