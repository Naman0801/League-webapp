import React from "react";
import Game from "./Game/Game";
import "./Games.css";
import cartoon from "../../../img/cartoon.jpeg";
import cars from "../../../img/cars.jpeg";
import christmas from "../../../img/christmas.jpeg";
import statue from "../../../img/statue.jpeg";

const Games = () => {
  return (
    <div className="games">
      {cardsData.map((card) => (
        <Game card={card} />
      ))}
    </div>
  );
};

const cardsData = [
  {
    bgImage: cartoon,
    heading: "Animated Films Quiz",
    free: true,
    poolPrize: "€25.00",
    close: "closed",
  },
  {
    bgImage: christmas,
    heading: "Christmas Number Ones",
    free: false,
    poolPrize: "54.90",
    close: "Closes: Tomorrow @4:30 PM",
  },
  {
    bgImage: cars,
    heading: "Action Films Quiz",
    free: true,
    poolPrize: "25.00",
    close: "Closes: Tomorrow @4:30 PM",
  },
  {
    bgImage: statue,
    heading: "Ancient History Quiz",
    free: true,
    poolPrize: "25.00",
    close: "Closes: Wed 30 Dec, @4:30 PM",
  },
  {
    bgImage: statue,
    heading: "Ancient History Quiz",
    free: true,
    poolPrize: "25.00",
    close: "Closes: Wed 30 Dec, @4:30 PM",
  },
  {
    bgImage: cars,
    heading: "Action Films Quiz",
    free: true,
    poolPrize: "25.00",
    close: "Closes: Tomorrow @4:30 PM",
  },
  {
    bgImage: christmas,
    heading: "Christmas Number Ones",
    free: false,
    poolPrize: "54.90",
    close: "Closes: Tomorrow @4:30 PM",
  },
  {
    bgImage: cartoon,
    heading: "Animated Films Quiz",
    free: true,
    poolPrize: "€25.00",
    close: "closed",
  },
];

export default Games;
