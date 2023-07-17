import React from "react";
import "../Css/WelcomeCard.css";
import CuisineCard from "./CuisineCard";

const WelcomeCard = () => {
  return (
    <div className="contentContainer">
      <div className="welcomeCard">
        <h2>Welcome to ReactMeals</h2>
        <p>Delicious Food Delivered to you.</p>
      </div>
      <CuisineCard />
      <img
        src="../Images/restaurant.jpg"
        alt="Restaurant"
        className="restaurantImage"
      />
    </div>
  );
};

export default WelcomeCard;
