import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './component/Navbar/Navbar';
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

  return (
    <div>
      <Navbar cartCount={cartItems.length} />   
      <State />  
      <Product cartItems={cartItems} onToggleCart={handleToggleCart} />
      <ToastContainer />
    </div>
  );
}