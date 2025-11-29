import { useState } from 'react';
import '../Style/Layout.css';
import { Link, Outlet } from "react-router-dom";
export default function Layout(){
    const[CartCount,setCartCount]=useState(0);
    const[CartItems, setCartItems]=useState([]);
    
    return(
        <>
         <div className='HomeContainer'>
            <div className='TitleContainer'>
            <h1 id="Title"> Désirée </h1>
            </div>
        
      
             <nav className='NavLinks'>
            <Link to ="/"  className="nav-btn" >Home</Link>
            <Link to="products"  className="nav-btn" >Products</Link>
            <Link to="cart"  className="nav-btn">Cart ({CartCount})</Link>

            
            </nav>
        
            </div>
              <Outlet context={{CartCount, setCartCount, CartItems, setCartItems}} />
        </>
    )
}