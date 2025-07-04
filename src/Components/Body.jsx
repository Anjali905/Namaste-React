import React, { useEffect, useState } from "react";
import RestaurantCard, { withLabelPromoted } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {
  const [listRestaurant, setListRestaurant] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [search, setSearch] = useState("");
  const onlineStatus = useOnlineStatus();
  const PromotedResturant = withLabelPromoted(RestaurantCard);
  const filterTopRated = () => {
    setFilteredRes(listRestaurant.filter((item) => item.data.avgRating >= 4.5));
  };

  const handleSearch = () => {
    const filtered = listRestaurant.filter((item) =>
      item.data?.name?.toLowerCase()?.includes(search.toLowerCase().trim())
    );
    setFilteredRes(filtered);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/mapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"
      );
      const data = await response.json();
      const restaurants = data?.data?.cards?.slice(4) || [];
      setListRestaurant(restaurants);
      setFilteredRes(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!onlineStatus) return <h1>No Internet</h1>;
  return listRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search restaurants..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <button onClick={filterTopRated}>Top Rated Restaurants</button>
      <div className="res-container">
        {filteredRes.length > 0 ? (
          filteredRes.map((res) => (
            <Link to={"/restaurant/" + res.card.card.info.id} className="link">
              {res.card.card.info.promoted ? (
                <PromotedResturant resData={res.card.card.info}/>
              ) : (
                <RestaurantCard
                  key={res.card.card.info.id}
                  resData={res.card.card.info}
                />
              )}
            </Link>
          ))
        ) : (
          <p>No restaurants found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
