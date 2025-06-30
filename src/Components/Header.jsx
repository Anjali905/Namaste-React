import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const navItems= [
  {
    id:1,
    name:"Home",
    path:"/"
  },{
    id:2,
    name:"About Us",
    path:"/about"
  },{
    id:3,
    name:"Contact Us",
    path:"/contact"
  }
]
export const Header = () => {
    const[isLogin,setIsLogin] = useState(false);
    const handleLoginClick = ()=>{
        setIsLogin(prev=> !prev)
    }
  return (
    <div className="header">
      <div className="logo">
        <img className="app-logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}><Link to={item.path}>{item.name}</Link></li>
          ))}
          <button className="btn" onClick={handleLoginClick}>{isLogin ? "Logout": "login"}</button>
        </ul>
      </div>
     
        
     
    </div>
  );
};

export default Header;
