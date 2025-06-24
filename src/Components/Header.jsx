import React from "react";
import { LOGO_URL } from "../utils/constants";
export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="app-logo"
          src={LOGO_URL}
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

export default Header;