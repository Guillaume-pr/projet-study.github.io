import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import Navigation from "./Navigation";

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <div className="home-container">
        <h1>Bienvenue dans notre Hopital</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ut beatae
          quo voluptatum laudantium magni maxime adipisci veniam! Reprehenderit
          quaerat, libero culpa deserunt, perferendis fuga nobis at nostrum
          debitis, officiis omnis quo tempora voluptatibus aliquam ea assumenda?
          Asperiores, ratione unde!
        </p>
        <ul>
          <h3>Service</h3>
          <li> -Lorem ipsum dolor sit amet.</li>
          <li> -Lorem ipsum dolor sit.</li>
          <li> -Lorem ipsum dolor sit amet consectetur.</li>
          <li> -Lorem, ipsum.</li>
          <li> -Lorem ipsum dolor sit amet.</li>
          <li> -Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
