import { useState , useEffect } from "react";
import { CDN_URL } from "../utils/resObj";
import { Top , Shimmer } from "../components/Shimmer";
import { Link } from "react-router-dom";
import useConnection from "../utils/useConnection";

export const Restaurant=(props)=>{
    const {resData}=props;

    const{name , costForTwo , cuisines , avgRating }=resData?.info;

    return(<div className="res-card m-6 p-4 w-[190px] h-[350px] overflow-hidden rounded-lg bg-green-50 hover:bg-green-100"> 
        <img className="res-img w-[9rem] h-[120px] m-1 rounded-lg " src={CDN_URL+resData.info.cloudinaryImageId}></img>
        <h4 className="font-bold mb-2">{name}</h4>
        <h5 className="mb-1">{costForTwo}</h5>
        <h5 className="mb-1">{cuisines.join(",")}</h5>
        <h5 className="mb-1">{avgRating}</h5>
    </div>
)
};

const Body = () => {
    const [listOfRestaurents, setlistOfRestaurents] = useState([]);
    const [originalList, setOriginalList] = useState([]);
    const [TopRatedBtn, setTopRatedBtn] = useState("Top Rated Restaurants");
    const [searchText, setSearchText] = useState("");
  
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3440997&lng=85.309562&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
  
        const restaurants = json?.data?.cards?.find(
          card => card.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  
        setlistOfRestaurents(restaurants);
        setOriginalList(restaurants); 

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const FilterList = () => {
      const filteredList = listOfRestaurents.filter(
        (res) => res.info.avgRating >= 4.5
      );
      setlistOfRestaurents(filteredList);
    };
  
    const ToggleFilterList = () => {
      if (TopRatedBtn === "Top Rated Restaurants") {
        FilterList();
      } else {
        setlistOfRestaurents(originalList); 
      }
  
      setTopRatedBtn(prev => prev === "Top Rated Restaurants" ? "Remove Filter" : "Top Rated Restaurants");
    };

    const isConnected = useConnection();

    if (!isConnected){
      return(<h1>Looks like your internet connection is lost...Please try again later...</h1>);
    };
  
    return (listOfRestaurents.length === 0) ? <>
      <Top />
      <Shimmer />
    </> : (
      <div className="body mt-1">
        <div className="filter flex mt-4 ml-3 -mb-5">
          <div>
            <input type="text" placeholder="Search" className="search ml-3 text-gray-400 border border-solid border-black" value={searchText}
              onChange={(e) => { setSearchText(e.target.value) }}></input> 
            <button className="search-btn px-1 mt-3 ml-1 bold border border-black bg-green-50"
              onClick={() => {
                const filteredRestaurant = originalList.filter((res) => {
                  return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                });
                setlistOfRestaurents(filteredRestaurant); 
              }}
            >Search</button>
          </div>
          <button className="filter m-2 px-1 mt-3 border border-black bg-green-50 " onClick={ToggleFilterList}>{TopRatedBtn}</button>
        </div>
        <br />
        <div className="res-cont flex flex-wrap">
        {listOfRestaurents.map((restaurant) => {
                    return (
                        <Link  key={restaurant.info?.id}  to={"rest/"+restaurant.info?.id}>
                            <Restaurant resData={restaurant} />
                        </Link>
                    );
                })}
        </div>
      </div>
    );
  };

export default Body;
