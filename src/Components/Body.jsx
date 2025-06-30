import React, { useEffect, useState } from "react";
import { restaurantData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listRestaurant, setListRestaurant] = useState(restaurantData);
  const[filteresRes,setFilteredRes]= useState(restaurantData);
  const[search,setSearch]= useState("");
  const FilterTop = () => {
    setFilteredRes(listRestaurant.filter((item) => item.avgRating >= 4.5));
  };
  useEffect(()=>{
    console.log("search text", search)
  },[search,listRestaurant]);
  const handleSearch =() => {
  setFilteredRes(listRestaurant.filter((item)=> item?.name?.toLowerCase()?.includes(search.toLowerCase().trim())));
  }
//   useEffect(() => {
//     fetchData();
//   }, []);
//   useEffect(() => {
//     console.log(listRestaurant);
//   }, [listRestaurant]);
//   const fetchData = async () => {
//     const resData = await fetch(
//       "https://www.swiggy.com/mapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"
//     );
//     const resJson = await resData.json();
//     console.log("json", resJson.data.cards.slice(4));
//     setListRestaurant(resJson?.data?.cards?.slice(4));
//   };
 
  return listRestaurant.length=== 0 ? <Shimmer/> :(
    <div>
      <div className="search">
       <input type="text" value={search} onChange={(e)=> setSearch(prev => e.target.value)}/>
       <button onClick={handleSearch}>Search</button>
      </div>
          <button onClick={FilterTop}>Top Rated Restaurants</button>
          <div className="res-container">
            {filteresRes.map((res) => (
              <RestaurantCard
                key={res.id}
                resData={res}
              />
            ))}
          </div>
    </div>
  );
};
export default Body;
