import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import "../Css/Header.css";
import { FiShoppingCart } from "react-icons/fi";
import CartHover from "./CartHover";
import CuisineCard from "../Card/CuisineCard";
import { CartContext } from "../Context/CartContext"; 
const Header = () => {
  const [showCartHover, setShowCartHover] = useState(false);
  const { cartItems } = useContext(CartContext); 

  const handleCartClick = () => {
    setShowCartHover(true);
  };

  const handleCloseCartHover = () => {
    setShowCartHover(false);
  };

  // Calculate the total count of all items in the cart
  const cartNumber = cartItems.reduce((total, item) => total + item.amount, 0);

  return (
    <div className="header">
      <span className="restaurantName">The Indian Feast</span>
      <button className="cartContainer" onClick={handleCartClick}>
        <FiShoppingCart className="cartIcon" />
        <span className="cartText">Your Cart</span>
        <div className="cartValue">
          <span className="cartNumber">{cartNumber}</span>
        </div>
      </button>
      {showCartHover &&
        ReactDOM.createPortal(
          <CartHover dishes={cartItems} onClose={handleCloseCartHover} />,
          document.body
        )}
      <CuisineCard />
    </div>
  );
};

export default Header;
