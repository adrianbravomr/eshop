import { useState }  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import './App.css';

const App = () => {
  const [cart,setCart] = useState(
    JSON.parse(localStorage.getItem('cart'))
    ?? []
  );
  const [favs,setFavs] = useState(
    JSON.parse(localStorage.getItem('favs')) 
    ?? []
  );

  const updateStorage = (item, data) => {
    localStorage.setItem(item,JSON.stringify(data));
  }


  const cartIndex = (product) => {
    return cart.findIndex(item => product.id === item.id);  
  }

  const modifyCart = (product, qty) => {

    const newCart = [...cart];
    const productIndex = cartIndex(product);

    if(productIndex > -1 && qty > 0) newCart[productIndex].qty = Number(qty);
    else if (qty === 0) newCart.splice(productIndex,1);
    else newCart.push({id:product.id,qty:Number(qty)});

    updateStorage('cart',newCart);
    setCart(newCart);
  }

  const isInFavs = (product) => {
    return favs.find(item => item.id === product.id);
  }

  const isInCart = (product) => {
    //returns quantity of specified item in cart
    const productIndex = cartIndex(product);
    if(productIndex > -1) return cart[productIndex].qty
    return 0
  }

  const handleModifyCart = (product,qty) => {
    modifyCart(product,qty);
  }

  const handleModifyFavs = (product) => {
    const newFavs = [...favs];
    const productIndex = newFavs.findIndex(item => item.id === product.id);
    if(productIndex>-1) newFavs.splice(productIndex,1);
    else newFavs.push({id:product.id,qty:1});
    updateStorage('favs',newFavs);
    setFavs(newFavs);
    return productIndex
  }

  const app = 
  <BrowserRouter>
    <Nav cart={cart} />
    <div className='content'>
      <div className='page-view'>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                handleModifyCart={handleModifyCart}
                handleModifyFavs={handleModifyFavs}
                isInCart={isInCart}
                isInFavs={isInFavs}
              />
            }
            />
          <Route
            path='/shop'
            element={
              <Shop
                handleModifyCart={handleModifyCart}
                handleModifyFavs={handleModifyFavs}
                isInCart={isInCart}
                isInFavs={isInFavs}
              />
            }
          />
          <Route
            path='/shop/:category'
            element={
              <Shop
                handleModifyCart={handleModifyCart}
                handleModifyFavs={handleModifyFavs}
                isInCart={isInCart}
                isInFavs={isInFavs}
              />
            }
          />
          <Route
            path='/product/:id'
            element={
              <Product
                handleModifyCart={handleModifyCart}
                isInCart={isInCart}
                handleModifyFavs={handleModifyFavs}
                isInFavs={isInFavs}
              />
              }
          />
          <Route
            path={'/cart'}
            element={
              <Cart
                cart={cart}
                handleModifyCart={handleModifyCart}
                favs={favs}
                handleModifyFavs={handleModifyFavs}
                isInCart={isInCart}
                isInFavs={isInFavs}
              />
            } />
        </Routes>
      </div>
      <Footer/>
    </div>
  </BrowserRouter>
  return (
    app
  );
}

export default App;
