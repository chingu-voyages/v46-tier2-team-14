import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:recipeId" element={<Recipe />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Layout>
  );
}
