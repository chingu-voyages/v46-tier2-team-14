import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";

const Home = lazy(() => import("./pages/home/Home"));
const Recipe = lazy(() => import("./pages/recipe/Recipe"));

export default function App() {
  return (
    <Layout>
      {/* todo: better fallback, a loader? */}
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:recipeId" element={<Recipe />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
