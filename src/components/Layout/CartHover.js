import React, { useState, useContext } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import "../Css/CartHover.css";
import { CartContext } from "../Context/CartContext"; 

const CartHover = ({ dishes, onRemove, onDecrease, onIncrease, onClose }) => {
  const { cartItems, setCartItems } = useContext(CartContext); 

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
              <div className="quantityContainer">
                <button className="quantityButton" onClick={() => onDecrease(dish.id)}>
                  <BsDash />
                </button>
                <span className="dishAmount">{dish.amount}</span>
                <button className="quantityButton" onClick={() => onIncrease(dish.id)}>
                  <BsPlus />
                </button>
              </div>
              <span className="dishPrice">₹{dish.price * dish.amount}</span>
              <button className="removeButton" onClick={() => onRemove(dish.id)}>
                Remove
              </button>
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
