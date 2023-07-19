import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../Css/Header.css";
import { FiShoppingCart } from "react-icons/fi";
import CartHover from "./CartHover";
import CuisineCard from "../Card/CuisineCard";

const Header = () => {
  const [showCartHover, setShowCartHover] = useState(true);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Paneer Masala",
      price: 100,
      image: "../Images/paneer.jpg",
      amount: 2,
    },
    {
      id: 2,
      name: "Hyderabadi Biryani",
      price: 150,
      image: "../Images/Chicken biryani.jpg",
      amount: 1,
    },
  ]);

  const updateCart = (dishes) => {
    const updatedCartItems = dishes.filter((dish) => dish.amount > 0);
    setCartItems(updatedCartItems);
  };

  const handleCartClick = () => {
    setShowCartHover(true);
  };

  const handleCloseCartHover = () => {
    setShowCartHover(false);
  };

  return (
    <div className="header">
      <span className="restaurantName">The Indian Feast</span>
      <button className="cartContainer" onClick={handleCartClick}>
        <FiShoppingCart className="cartIcon" />
        <span className="cartText">Your Cart</span>
        <div className="cartValue">
          <span className="cartNumber">{cartItems.length}</span>
        </div>
      </button>
      {showCartHover &&
        ReactDOM.createPortal(
          <CartHover dishes={cartItems} onClose={handleCloseCartHover} />,
          document.body
        )}
      <CuisineCard updateCart={updateCart} />
    </div>
  );
};

export default Header;
