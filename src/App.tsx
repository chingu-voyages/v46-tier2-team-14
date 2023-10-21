import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import DisplayPost from "./pages/Recipe";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:postId" element={<DisplayPost />} />
      </Routes>
    </Layout>
  );
}
