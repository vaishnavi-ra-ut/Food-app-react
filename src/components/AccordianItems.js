import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/resObj";
import { addItem } from "../utils/CartSlice";

const AccordianItems = ({items}) => {

  const dispatch = useDispatch();
  const handleAdd=(item)=>{
      dispatch(addItem(item))
      console.log(item);
  };
    return <div>
        {items.map(item => 
           <div key={item.card?.info?.id} >
             <div className="my-2 flex justify-between">
                <span className="ml-8">{item?.card?.info?.name}</span>
                <span className="mr-8"> ₹ {item?.card?.info?.price /100}</span>
                <div>
                  <button className="bg-black text-white rounded-xl border border-black ml-3 w-14 z-10" onClick={()=>handleAdd(item)}>
                    Add +
                  </button>
                  <img src={item?.card?.info?.imageId ? `${CDN_URL}${item.card.info.imageId}` : "fallback-image-url"} className="w-17% h-20" alt="Dish Image"/>
                </div>
             </div>
             <hr></hr>
           </div>
        )}
    </div>
}
export default AccordianItems;