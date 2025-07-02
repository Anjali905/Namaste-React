import { useEffect, useState } from "react";
import React from "react";
import { MENU_URL } from "../utils/constants";

export const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_URL + resId + "&query=Biryani&submitAction=ENTER&source=collection"
    );
    const jsonData = await data.json();
    console.log(
      jsonData?.data?.cards[5].groupedCard.cardGroupMap.REGULAR.cards.slice(4)
    );
    setResInfo(
      jsonData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(
        4
      )
    );
  };

  return resInfo;
};
