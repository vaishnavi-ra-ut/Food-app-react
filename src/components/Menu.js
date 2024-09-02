import { useParams } from "react-router-dom";
import useRestApi from "../utils/useRestApi";
import Category from "./Category";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const Menu = () =>{
    
    const {id} = useParams()

    const [showIndex , setShowIndex] = useState(0);
    
    const { restInfo , menuInfo ,categories } = useRestApi(id);

    
    const {loggedUser} = useContext(UserContext);

    if (!restInfo || !menuInfo) return <div>Loading...</div>;

      const{name , costForTwo , cuisines , avgRating }= restInfo?.info;
      // console.log(restInfo);

      // const regularCards = menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    
      // const categories = Array.isArray(regularCards)
      // ? regularCards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
      // : [];

  
    // console.log(categories); 

    return (
        <div className="m-4 text-center -ml-2">
          <h1 className="font-bold mb-2 text-2xl my-2">{name}</h1>
          <h2 className="mb-2 font-semibold">{cuisines.join(", ")} - {costForTwo /100}</h2>
          <h3 className="font-semibold mb-2">Finger licking Items - Average Rating :{avgRating}</h3>
          <h1 className="font-bold mb-2 text-2xl my-2">{loggedUser}</h1>
          {/* <ul className="font-normal">
            {menuInfo.map((dish) => (
              <li className="my-6" key={dish.card.info.id}>
                {dish.card.info.name} - {dish.card.info.price/100}
                <hr></hr>
              </li>
              
            ))} 
          </ul> */}

          {categories.map((category , index)=>(
            <Category key={category.card.card.title} data={category.card?.card} showItems={index === showIndex ? true : false} setShowIndex={()=> setShowIndex(index===showIndex ? null : index)}   />
          ))}
        </div>
      );
};

export default Menu;
