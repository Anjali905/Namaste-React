import React from "react";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  return (
    <div>
      <h1>REsturant name</h1>
      {resInfo?.map((item) => (
        <ul key={item.card.card.restaurantId}>
          <li key={item.card.card.restaurantId}>{item.card.card.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default RestaurantMenu;
