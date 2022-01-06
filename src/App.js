import React, { useState, useEffect } from "react";
import { Products, Navbar , Cart ,Checkout} from "./components";
import { CssBaseline } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { commerce } from "./lib/commerce";

const App = () => {
  const [products, setproducts] = useState([]);
  const [cart, setcart] = useState({});
  const [order , setOrder] = useState({});
  const [errorMessage , setErrorMessage]= useState('');

  const fetchProduct = async () => {
    const { data } = await commerce.products.list();
    setproducts(data);
  };
  const fetchCart = async ()=> {
    setcart( await commerce.cart.retrieve());
  //commerce.cart.retrieve().then((cart) => setcart(cart));

  
  }
  const handleAddtoCart = async (productId ,  quantity)=>{
   const item = await commerce.cart.add(productId, quantity);
   setcart(item.cart);
  }
  
  const handleUpdateCartQty = async (productId  , quantity)=>{
    const result = await commerce.cart.update(productId , {quantity});
    setcart(result.cart)
  }

  
  const handleDeleteFromCart = async (productId)=>{
    const {cart} = await commerce.cart.remove(productId);
    setcart(cart)
  }
  const handleEmptyCart = async ()=>{
    const {cart} = await commerce.cart.empty();
    setcart(cart);
  }

  // called when order is done 
  const refreshCart = async()=>{
    const newCart = commerce.cart.refresh();
    setcart(newCart);
  }

  const handleCaptureCheckout = async (checkoutTokenId , newOrder)=>{

    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId ,newOrder );
      setOrder(incomingOrder);
      refreshCart();
    }
    catch(error ){
      setErrorMessage(error.data.error.message)
    }

  }
 
  useEffect(() => {
    fetchProduct();
    fetchCart();
   
  }, []);

  return (
    <Router>
    <div style={{ display: 'flex' }} >
    <CssBaseline />
      <Navbar totalItems={cart.total_items}/>
  
        <Switch>
          <Route exact path="/">
          <Products products={products} onAddToCart={handleAddtoCart} />
          </Route>

          <Route path="/cart">
          <Cart cart={cart}
          handleUpdateCartQty={handleUpdateCartQty}
          handleDeleteFromCart={handleDeleteFromCart}
          handleEmptyCart={handleEmptyCart} />
          </Route>
          <Route exact path='/checkout'>
            <Checkout cart={cart}
            order = {order} 
            handleCaptureCheckout = {handleCaptureCheckout}
            error={errorMessage}
              />
          </Route>
         
        </Switch>
    </div>
    </Router>
  );
};
export default App;
