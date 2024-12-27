import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Category from "./components/pages/backend/Category/Category";
import Dashboard from "./components/pages/backend/dashboard/Dashboard";
import NewProduct from "./components/pages/backend/NewProduct/NewProduct";
import Home from "./components/pages/frontend/home/Home";
import ProductInfo from "./components/pages/frontend/product-info/ProductInfo";
import { StoreProvider } from "./components/Store/storeContext";
import Clothes from "./components/pages/backend/Clothes/Clothes";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/product/:slug" element={<ProductInfo />} />
            <Route path="/admin/Dashboard" element={<Dashboard />} />
            <Route path="/admin/clothes" element={<Clothes />} />
            <Route path="/admin/category" element={<Category />} />
            <Route path="/admin/newproduct" element={<NewProduct />} />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
