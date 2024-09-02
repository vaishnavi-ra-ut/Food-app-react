import { useState , useContext } from "react";
import { LOGO_URL } from "../utils/resObj";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
    
    const [btn , setBtn] = useState("Login");

    const {loggedUser} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items); //Subscribing to our store using a selector

   return(   
     <div className="flex justify-between bg-green-50 h-36 shadow-md">
         <div className="w-25 -mt-8" >
             <img src= {LOGO_URL} className="mix-blend-multiply"/>
         </div>
            <div>
             <ul className="flex p-5 pr-2 m-5 mr-1">
                 <li className="p-4"><Link to="/">Home</Link></li>
                 <li className="p-4"><Link to="/about">About us</Link></li>
                 <li className="p-4"><Link to="/contact">Contact  us</Link></li>
                 <li className="p-4"><Link to="/cart">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="black"
                        className="w-6 h-5">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 9h14m-7-9V7"
                        />
                    </svg>({cartItems.length})
                  </Link></li>
                 <button className=" mt-4 px-2 border rounded-lg w-16 h-8 border-black" onClick={()=>{
                        btn==="Login" ? setBtn("Logout") : setBtn("Login")
                        }}>{btn}</button>
                 <li className="p-4">{loggedUser}</li>
             </ul>
            </div>
        </div>
    ); 

};

export default Header;