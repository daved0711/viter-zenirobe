
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/frontend/home/Home';
import Ads from './components/pages/backend/Category/Category';
import { StoreProvider } from './components/Store/storeContext';
import NewProduct from './components/pages/backend/NewProduct/NewProduct';
import Tshirts from './components/pages/backend/Tshirts/Tshirts';
import Category from './components/pages/backend/Category/Category';
import Dashboard from './components/pages/backend/dashboard/Dashboard';


const App = () => {
  return (
    <StoreProvider
    >
  <Router>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/admin/Dashboard' element={<Dashboard/>}/>
      <Route path='/admin/tshirts' element={<Tshirts/>}/>
      <Route path='/admin/category' element={<Category/>}/>
      <Route path='/admin/newproduct' element={<NewProduct/>}/>
    
    </Routes>
  </Router>
  </StoreProvider>
  )
};

export default App;
