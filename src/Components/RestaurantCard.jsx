import { RES_IMAGE } from "../utils/constants";
import React from "react";
/* withLabelPromoted is higher order componwent*/ 
const RestaurantCard = ({ resData }) => {
    
  return (
    <div className="res-card" key={resData?.id}>
      <img
        className="res-logo"
        alt="res-logo"
        src={RES_IMAGE}
      />
      <div className="headComtainer">
        <span className="title">{resData?.name}</span>
        <p className="dliveryTime">{`${resData?.sla?.deliveryTime} mins`}</p>
        
      </div>
      <div className="dets">
      <div className="cusines">
       <p>{resData?.cuisines?.join(" , ")}</p>
      </div>
       <p>{`₹${parseInt(resData?.costForTwo?.replace(/\D/g, "")) / 2}`}</p>
        <p className="rating">{resData?.avgRating}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;

export const withLabelPromoted = (RestaurantCard)=>{
   return (props)=>{
    return(
    <div>
      <label>Promoted</label>
      <RestaurantCard {...props}/>
    </div>
    )
    }
  }