import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import DisplayPost from "./pages/Recipe";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/recipe/:postId" element={<DisplayPost />} />
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
}
