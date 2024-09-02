import { useDispatch, useSelector } from "react-redux";
import AccordianItems from "./AccordianItems";
import { clearCart } from "../utils/CartSlice";

const Cart = ()=>{

    const dispatch = useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    const cartItems = useSelector((store)=> store.cart.items)
    return(
        <div className="text-center m-16 p-4">
            <h1 className="font-bold  text-2xl">Cart</h1>
            <div>
                <button onClick={handleClearCart}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-7 h-7 -mt-12 ml-28"
                >
                <rect width="24" height="24" fill="white" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 3a1 1 0 011-1h4a1 1 0 011 1v1h5a1 1 0 110 2H5a1 1 0 110-2h4V3zm10 5a1 1 0 00-1-1H6a1 1 0 00-1 1v12a3 3 0 003 3h8a3 3 0 003-3V8zM7 9h10v12a1 1 0 01-1 1H8a1 1 0 01-1-1V9z"
                    fill="black"
                />
                </svg>
                </button>
            </div>
            <div><AccordianItems items={cartItems}/></div>
        </div>  
    );
}

export default Cart;