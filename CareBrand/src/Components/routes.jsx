import App from "../App"

import Products from "./Products"
import Cart from "./Cart"
import Layout from "./Layout";
import { Children } from "react";

const routes=[
    {
        path:"/",
        element:<Layout/>,
        children:[

    
            {
             path:"/", 
        element:<App/>
            },
 {
    path:"products",
    element:<Products/>
    },
    {
        path:"cart",
        element:<Cart/>,
      
    }
        ]
    }

]
export default routes; 