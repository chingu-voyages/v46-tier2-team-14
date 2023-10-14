import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import DetailRecepie from "./pages/home/recepie";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recepie" element={<DetailRecepie />} />
      </Routes>
    </Layout>
  );
}
