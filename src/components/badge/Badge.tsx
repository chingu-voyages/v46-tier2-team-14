import styles from "./badge.module.css";

// naive polymorphic component
type Props = { children: React.ReactNode } & (
  | { as?: "span"; href?: never; target?: never }
  | { as: "a"; href: string; target?: string }
);

export default function Badge({
  children,
  as: Component = "span",
  href,
  target,
}: Props) {
  return (
    <Component className={styles.badge} href={href} target={target}>
      {children}
    </Component>
  );
}
