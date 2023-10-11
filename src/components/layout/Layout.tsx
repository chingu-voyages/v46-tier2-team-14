import Header from "./header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      {/* <footer></footer> do we need a footer? */}
    </>
  );
}
