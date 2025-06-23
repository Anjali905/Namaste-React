import React from "react";
import ReactDOM from "react-dom/client";
export const restaurantData = [
  {
    id: "42060",
    name: "Sharief Bhai Biryani",
    cloudinaryImageId:
      "FOOD_CATALOG/IMAGES/CMS/2024/11/21/cdad749f-165b-4aaa-b6b9-1c6f966494b0_a8628830-65ec-43e0-8455-9f4a2ae41001.jpg",
    locality: "Koramangala",
    costForTwo: "₹400 for two",
    cuisines: [
      "Biryani",
      "Kebabs",
      "Mughlai",
      "Arabian",
      "Rolls",
      "Street Food",
    ],
    avgRating: 4.2,
    sla: {
      deliveryTime: 30,
    },
  },
  {
    id: "275",
    name: "Mani's Dum Biryani",
    cloudinaryImageId:
      "FOOD_CATALOG/IMAGES/CMS/2024/3/27/bc960282-e31e-4e77-97e9-6c6ec9cec813_c46e6499-a9ca-43e8-91d5-85aa6f0afa15.jpg",
    locality: "Koramangala",
    costForTwo: "₹400 for two",
    cuisines: ["Andhra", "Biryani"],
    avgRating: 4.6,
    sla: {
      deliveryTime: 28,
    },
  },
  {
    id: "1013620",
    name: "Big Bowl",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/24/cf06adc4-a816-4170-b023-83a41f36db89_1013620.jpg",
    locality: "Koramangala",
    costForTwo: "₹250 for two",
    cuisines: ["Chinese", "Tibetan", "Desserts"],
    avgRating: 4.6,
    sla: {
      deliveryTime: 23,
    },
  },
  {
    id: "229",
    name: "Meghana Foods",
    cloudinaryImageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg",
    locality: "Koramangala",
    costForTwo: "₹500 for two",
    cuisines: ["Biryani", "Andhra", "South Indian", "Chinese", "Seafood"],
    avgRating: 4.6,
    sla: {
      deliveryTime: 24,
    },
  },
];

const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card" key={resData.id}>
      <img
        className="res-logo"
        alt="res-logo"
        src="data:image/jpeg;base64,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"
      />
      <div className="headComtainer">
        <span className="title">{resData.name}</span>
        <p className="dliveryTime">{`${resData.sla.deliveryTime} mins`}</p>
        
      </div>
      <div className="dets">
      <div className="cusines">
       <p>{resData.cuisines.join(" , ")}</p>
      </div>
       <p>{`₹${parseInt(resData.costForTwo.replace(/\D/g, "")) / 2}`}</p>
        <p className="rating">{resData.avgRating}</p>
      </div>
    </div>
  );
};
const StarSVg = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      strokeColor="rgba(2, 6, 12, 0.92)"
      fillColor="rgba(2, 6, 12, 0.92)"
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
      ></circle>
      <path
        d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
        fill="white"
      ></path>
      <defs>
        <linearGradient
          id="StoreRating20_svg__paint0_linear_32982_71567"
          x1="10"
          y1="1"
          x2="10"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#21973B"></stop>
          <stop offset="1" stop-color="#128540"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
const Body = () => {
  return (
    <div>
      <div className="search">search</div>
      <div className="res-container">
        {restaurantData.map((res) => (
          <RestaurantCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="app-logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-item">
        <ul>
          {["Home", "About", "Contact Us", "Cart"].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
