import React, { useState } from "react";
import "../Css/CuisineCard.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const dishes = [
  {
    id: 1,
    name: "Paneer Masala",
    price: "₹100",
    image: "../Images/paneer.jpg",
  },
  {
    id: 2,
    name: "Hyderabadi Biryani",
    price: "₹150",
    image: "../Images/Chicken biryani.jpg",
  },
  {
    id: 3,
    name: " Makki Roti With Sarson Saag",
    price: "₹120",
    image: "../Images/mak1.jpg",
  },
  {
    id: 4,
    name: "Pav Bhaji",
    price: "₹180",
    image: "../Images/pav.jpg",
  },
  {
    id: 5,
    name: "Malai Kofta",
    price: "₹140",
    image: "../Images/malai.jpg",
  },
];

const CuisineCard = () => {
  const [currentDishIndex, setCurrentDishIndex] = useState(0);

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

  const currentDish = dishes[currentDishIndex];

  return (
    <div className="cuisineCard">
      <img
        src={currentDish.image}
        alt={currentDish.name}
        className="dishImage"
      />
      <h3 className="dishName">{currentDish.name}</h3>
      <p className="dishPrice">{currentDish.price}</p>
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
