import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import CartIcon from './CartIcon';


function App() {
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
  console.log("Search text:", searchText);
}, [searchText]);

  return (
    <BrowserRouter basename="/react-demo">
      <>
      <Navbar onSearch={setSearchText}/>      
      <CartIcon/>
      </>
      <Routes>
        <Route path="/" element={<Home searchText={searchText} />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
