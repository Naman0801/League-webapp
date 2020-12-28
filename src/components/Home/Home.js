import React from "react";
import "./Home.css";
import Slider from "./Slider/Slider";
import moneyWon from "../../img/money_won.png";
import CountUp from "react-countup";
import Games from "./Games/Games";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <div className="home__count">
        <h2>Total money won on Quizando</h2>
        <div>
          <img src={moneyWon} alt="money-logo" />
          <CountUp
            start={50000}
            end={149788.94}
            duration={5}
            separator=","
            prefix="€ "
            decimals={2}
          />
        </div>
      </div>
      <Games />
    </div>
  );
};

export default Home;
