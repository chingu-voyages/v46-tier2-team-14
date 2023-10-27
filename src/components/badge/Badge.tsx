import styles from "./badge.module.css";

type Props = { children: React.ReactNode } & (
  | { as?: "span" }
  | { as: "a"; href: string; target?: string }
);

export default function Badge({
  children,
  as: Component = "span",
  ...props
}: Props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component className={styles.badge} {...props}>
      {children}
    </Component>
  );
}
