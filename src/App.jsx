import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Banner from './component/Banner/Banner';
import Footer from './component/Footer/Footer';
import GetStarted from './component/GetStarted/GetStarted';
import Navbar from './component/Navbar/Navbar';
import Pricing from './component/Pricing/Pricing';
import Product from './component/Product/Product';
import State from './component/State/State';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleToggleCart = (id, productName) => {
    if (cartItems.includes(id)) {
      setCartItems(cartItems.filter(item => item !== id));
      toast.info(`${productName} removed from cart!`, {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      setCartItems([...cartItems, id]);
      toast.success(`${productName} added to cart!`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
    toast.success("Proceeding to checkout! Your order has been placed.", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <Banner></Banner>
      <State />
      <Product 
        cartItems={cartItems} 
        onToggleCart={handleToggleCart} 
        onClearCart={handleClearCart}
      />
      <GetStarted></GetStarted>
      <Pricing></Pricing>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}