import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { fetchProduct } from "./redux/slices/productSlice";
import Main from './components/main/Main';
import Shop from './components/shop/Shop';
import About from './components/about/About';
import Cart from './components/cart/Cart'
import NotFound from './components/not-found/NotFound'
import MainLayout from './layouts/MainLayout';
import './App.css';
import Menu from './components/menu/Menu';
import Checkout from './components/checkout/Checkout';


function App() {

  const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchProduct('https://660efcb9356b87a55c50a062.mockapi.io/chikery/Product'))
    }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Main />}/>
          <Route path='shop' element={<Shop />}/>
          <Route path='about' element={<About />}/>
          <Route path='menu' element={<Menu />}/>
          <Route path='cart' element={<Cart />}/>
          <Route path='checkout' element={<Checkout />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
