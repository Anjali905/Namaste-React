import React, { useEffect, useState } from "react";

const RestaurantMenu = () => {
    const[resInfo,setResInfo]= useState(null)
    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu = async()=>{
        const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=275&query=Biryani&submitAction=ENTER&source=collection");
        const jsonData = await data.json();
        console.log(jsonData?.data?.cards[5].groupedCard.cardGroupMap.REGULAR.cards.slice(4));
         setResInfo(jsonData?.data?.cards[5].groupedCard.cardGroupMap.REGULAR.cards.slice(4))
    }
    useEffect(()=>{
        console.log("resInfo",resInfo);
    },[resInfo]);
  return (
    <div>
    {
        resInfo.map((item,id)=>(
            <div></div>
            
        ))
    }
      
    </div>
  );
};

export default RestaurantMenu;
