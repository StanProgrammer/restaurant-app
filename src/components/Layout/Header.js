import React from "react";
import "../Css/Header.css";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    
      <div className="header">
        <span className="restaurantName">ReactMeals</span>
        <button className="cartContainer">
        <FiShoppingCart className="cartIcon" />
          
          <span className="cartText">Your Cart</span>
          <div className="cartValue">
            <span className="cartNumber">0</span>
          </div>
        </button>
      </div>
    
  );
};

export default Header;
