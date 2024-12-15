
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/frontend/home/Home';
import Ads from './components/pages/backend/Category/Category';
import { StoreProvider } from './components/Store/storeContext';
import NewProduct from './components/pages/backend/NewProduct/NewProduct';
import Tshirts from './components/pages/backend/Tshirts/Tshirts';
import Category from './components/pages/backend/Category/Category';
import Dashboard from './components/pages/backend/dashboard/Dashboard';
import ProductInfo from './components/pages/frontend/product-info/ProductInfo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



const App = () => {
  const queryClient = new QueryClient();
  return (

    <QueryClientProvider client={queryClient}>
    <StoreProvider>
  <Router>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/product/:slug" element={<ProductInfo/>} />
      <Route path='/admin/Dashboard' element={<Dashboard/>}/>
      <Route path='/admin/tshirts' element={<Tshirts/>}/>
      <Route path='/admin/category' element={<Category/>}/>
      <Route path='/admin/newproduct' element={<NewProduct/>}/>
    
    </Routes>
  </Router>
  </StoreProvider>
  </QueryClientProvider>
  )
};

export default App;
