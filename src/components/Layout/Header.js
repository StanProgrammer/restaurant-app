import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import "../Css/Header.css";
import { FiShoppingCart } from "react-icons/fi";
import CartHover from "./CartHover";
import CuisineCard from "../Card/CuisineCard";
import { CartContext } from "../Context/CartContext";

const Header = () => {
  const [showCartHover, setShowCartHover] = useState(false);
  const { cartItems, setCartItems } = useContext(CartContext);
  const [cartNumber, setCartNumber] = useState(0);

  useEffect(() => {
    // Calculate the total count of all items in the cart
    const totalCount = cartItems.reduce((total, item) => total + item.amount, 0);
    setCartNumber(totalCount);
  }, [cartItems]);

  const handleCartClick = () => {
    setShowCartHover(true);
  };

  const handleCloseCartHover = () => {
    setShowCartHover(false);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, amount: Math.max(item.amount - 1, 0) } : item
      )
    );
  };

  const handleIncreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, amount: item.amount + 1 } : item))
    );
  };

  const handleUpdateCartItems = (updatedCartItems) => {
    setCartItems(updatedCartItems);
  };

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
          <CartHover
            dishes={cartItems}
            onRemove={handleRemoveFromCart}
            onDecrease={handleDecreaseQuantity}
            onIncrease={handleIncreaseQuantity}
            onClose={handleCloseCartHover}
            updateCartItems={handleUpdateCartItems}
          />,
          document.body
        )}
      <CuisineCard />
    </div>
  );
};

export default Header;
