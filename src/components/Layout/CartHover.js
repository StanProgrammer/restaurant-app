import React from "react";
import "../Css/CartHover.css";

const CartHover = ({ dishes, onClose }) => {
  const totalAmount = dishes.reduce(
    (total, dish) => total + dish.amount * dish.price,
    0
  );

  return (
    <div className="cartHoverOverlay">
      <div className="cartHover">
        <h2 className="cartTitle">Your Cart</h2>
        <ul className="dishesList">
          {dishes.map((dish) => (
            <li key={dish.id} className="dishItem">
              <span className="dishName">{dish.name}</span>
              <span className="dishAmount">x{dish.amount}</span>
              <span className="dishPrice">₹{dish.price * dish.amount}</span>
            </li>
          ))}
        </ul>
        <div className="totalAmount">
          <span>Total:</span>
          <span>₹{totalAmount}</span>
        </div>
        <div className="buttonsContainer">
          <button className="orderButton">Order</button>
          <button className="closeButton" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartHover;
