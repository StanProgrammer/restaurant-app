import React, { useState } from "react";
import "../Css/CuisineCard.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const dishes = [
  {
    id: 1,
    name: "Paneer Masala",
    price: "$10",
    image: "../Images/paneer.jpg",
  },
  {
    id: 2,
    name: "Chucken Biryani",
    price: "$15",
    image: "../Images/Chicken biryani.jpg",
  },
  {
    id: 3,
    name: "Dish 3",
    price: "$12",
    image: "../Images/dish3.jpg",
  },
  {
    id: 4,
    name: "Dish 4",
    price: "$18",
    image: "../Images/dish4.jpg",
  },
  {
    id: 5,
    name: "Dish 5",
    price: "$14",
    image: "../Images/dish5.jpg",
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
