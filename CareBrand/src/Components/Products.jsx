import { useEffect, useState } from "react"
import '../Style/Products.css';
import { useOutletContext } from "react-router-dom";



export default function Products(){


 const[Error, setError]=useState(null);
const[Image, setImage]=useState([]);
const[Loading, setLoading]=useState(true);
const {CartCount, setCartCount, CartItems, setCartItems}=useOutletContext();


    useEffect(()=>{
        fetch("https://dummyjson.com/products/category/beauty")
        .then(resp=>{
            if(resp.status>=400){
                throw new Error("Error");
            }
            return resp.json();
        })
        
        .then(data=>setImage(data.products))
        .catch((error)=>setError(error))
        .finally(()=>setLoading(false));
    },[])





    if(Error){
    return(
    <p className="Loading"> Error in URL </p>
    )
}
if(Loading){
    return(
        <h1 className="Loading"> Loading...</h1>
    )
   
}

function HandlePurchase(id){
    

   const product=Image.find(item=>item.id===id);

   const exist=CartItems.some(item=>item.id==id);
     if(!exist){
        setCartItems((prev)=>[...prev, product])
        setCartCount(CartCount+1);
     }
}

return(
<>
  <div className="CardContainer">
{Image.map((element)=>{
return(
   
  <>
  <div className="Card">
  <img className="Card-img" src={element.thumbnail}/>
<h3 className="CardName" > {element.title}</h3>
<p className="Price"> {element.price}</p>
<button type="button" className="AddRemove" onClick={()=>HandlePurchase(element.id)}> Purchase</button>
<button type="button" className="AddRemove" onClick={()=>setCartCount(CartCount-1)}> Remove</button>
 </div>

  </>
)
})}
 </div>
</>
)

}





 
