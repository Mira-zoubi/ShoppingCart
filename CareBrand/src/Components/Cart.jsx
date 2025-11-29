import { Outlet, useOutletContext } from "react-router-dom";
import { useState } from "react";
import '../Style/Cart.css';
import { Link } from "react-router-dom";
export default function Cart() {

 const { CartItems}=useOutletContext();
    const[Quantity, setQuantity]=useState({});
    
    if(CartItems.length===0){
        return(
            <>
            <div className="EmptyCart">

            <h1 id="Empty"> Your Cart is Empty!</h1>
            <Link to="/products"> Continue Shopping</Link>
           
            </div>
          

            </>
        )
    }

  return (
    <div className="CartContainer" >
       
      {CartItems.map((item) => (
        
        <div className="ProductCartContainer" key={item.id}>

             
            <img className="CartProductImage" src={item.thumbnail} />
          <h3 className="CartProductTitle">{item.title}</h3>
              
        
        
          <p className="CartProductPrice">{(item.price * (Quantity[item.id] || 1))}</p>

            <div className="Buttons">
            <button type="button" className="Increase-Button" onClick={()=>setQuantity((prev)=>({...prev, [item.id] : (prev[item.id] || 0 ) +1}))} >➕</button>
            <p> {Quantity[item.id]}</p>
            <button type="button" className="Decrease-Button" onClick={()=>setQuantity((prev)=>({...prev, [item.id] : Math.max((prev[item.id] || 0) -1 ,0 ) }))}>➖</button>
        </div>
        
         </div>
      ))}
      
    </div>



  )

}
