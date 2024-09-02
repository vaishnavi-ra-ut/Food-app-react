import { useState , useEffect } from "react";

const useRestApi=(id)=>{
    
    const [restInfo , setrestInfo] = useState(null);
    const [menuInfo , setMenuInfo] = useState(null);
    const [categories, setCategories] = useState(null);

    useEffect(()=>{
        fetchData();
    } , [id]);

    const fetchData = async () =>{
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3440997&lng=85.309562&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();

        // console.log(json);
        setMenuInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card?.itemCards);
        setrestInfo(json?.data?.cards[2]?.card?.card);
    
        const regularCards = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        const itemCategories = regularCards.filter(
          (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

        setCategories(itemCategories);

        // console.log(regularCards);
  
    }
    
    return { restInfo , menuInfo , categories};
};

export default useRestApi;