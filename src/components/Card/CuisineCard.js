import React, { useState, useContext } from "react";
import "../Css/CuisineCard.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { CartContext } from "../Context/CartContext"; 


const initialDishes = [
  {
    id: 1,
    name: "Paneer Masala",
    price: 100,
    image: "../Images/paneer.jpg",
    amount: 0,
  },
  {
    id: 2,
    name: "Hyderabadi Biryani",
    price: 150,
    image: "../Images/Chicken biryani.jpg",
    amount: 0,
  },
  {
    id: 3,
    name: "Makki Roti With Sarson Saag",
    price: 120,
    image: "../Images/mak1.jpg",
    amount: 0,
  },
  {
    id: 4,
    name: "Pav Bhaji",
    price: 180,
    image: "../Images/pav.jpg",
    amount: 0,
  },
  {
    id: 5,
    name: "Malai Kofta",
    price: 140,
    image: "../Images/malai.jpg",
    amount: 0,
  },
];

const CuisineCard = () => {
  const [currentDishIndex, setCurrentDishIndex] = useState(0);
  const [dishes] = useState(initialDishes);
  const { cartItems, setCartItems } = useContext(CartContext); 

  const handleNextDish = () => {
    setCurrentDishIndex((prevIndex) =>
      prevIndex === dishes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevDish = () => {
    setCurrentDishIndex((prevIndex) =>
      prevIndex === 0 ? dishes.length - 1 : prevIndex - 1
    );
  };

  const handleAdd = () => {
    const updatedDishes = [...dishes];
    const currentDish = updatedDishes[currentDishIndex];

    const existingDish = cartItems.find((item) => item.id === currentDish.id);

    if (existingDish) {
      existingDish.amount += 1;
      setCartItems([...cartItems]);
    } else {
      currentDish.amount = 1;
      setCartItems((prevCartItems) => [...prevCartItems, currentDish]);
    }
  };

  const currentDish = dishes[currentDishIndex];

  return (
    <div className="cuisineCard">
      <img src={currentDish.image} alt={currentDish.name} className="dishImage" />
      <h3 className="dishName">{currentDish.name}</h3>
      <p className="dishPrice">{currentDish.price}</p>
      <p className="amount">Amount: {currentDish.amount}</p>
      <button className="addButton" onClick={handleAdd}>
        Add
      </button>
      <div className="navigationButtons left">
        <button onClick={handlePrevDish}>
          <BsChevronLeft />
        </button>
      </div>
      <div className="navigationButtons right">
        <button onClick={handleNextDish}>
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CuisineCard;