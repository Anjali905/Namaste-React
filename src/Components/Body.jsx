import React, { useState } from "react"; 
import {restaurantData} from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const[listRestaurant,setListRestaurant] = useState(restaurantData);
    const FilterTop = ()=>{
        setListRestaurant((prev)=>prev.filter((item)=> item.avgRating >= 4.5))
    }
  return (
    <div>
      <div className="search">search</div>
      <button onClick={FilterTop}>Top Rated Restaurants</button>
      <div className="res-container">
        {listRestaurant.map((res) => (
          <RestaurantCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;