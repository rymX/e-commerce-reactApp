import React, { useState, useEffect } from "react";
import { Products, Navbar , Cart} from "./components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";import { commerce } from "./lib/commerce";

const App = () => {
  const [products, setproducts] = useState([]);
  const [cart, setcart] = useState({});

  const fetchProduct = async () => {
    const { data } = await commerce.products.list();
    setproducts(data);
  };
  const fetchCart = ()=> {
  //  const {data} = await commerce.cart.retrieve();
  //   setcart(data);
  commerce.cart.retrieve().then((cart) => setcart(cart));
  
  }
  const handleAddtoCart = async (productId ,  quantity)=>{
   // commerce.cart.add('prod_N7GKwbaxLdl3EX', 5).then((response) => console.log(response));
   const item = await commerce.cart.add(productId, quantity);
   setcart(item.cart);
  }
  
  useEffect(() => {
    fetchProduct();
    fetchCart();
   
  }, []);
  console.log(cart);


  return (
    <Router>
    <div>
      <Navbar totalItems={cart.total_items}/>
  
        <Switch>
          <Route exact path="/">
          <Products products={products} onAddToCart={handleAddtoCart} />
          </Route>

          <Route path="/cart">
          <Cart cart={cart} />
          </Route>
         
        </Switch>
    </div>
    </Router>
  );
};
export default App;
