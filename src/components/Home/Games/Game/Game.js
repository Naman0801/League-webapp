import React from "react";
import "./Game.css";
import gameIcon from "../../../../img/game-icon.png";

const Game = ({ card }) => {
  return (
    <div className="game">
      <div className="game__icon">
        <img src={gameIcon} alt="game-icon" />
      </div>
      <p className="game__companyName">
        Quizando <span></span>
      </p>
      <div
        className="game__card"
        style={{
          background: `url(${card.bgImage}) no-repeat center center, linear-gradient(#000, #fff, #000)`,
        }}
      >
        <h2>{card.heading}</h2>
        <div
          className="game__cardInfo"
          style={{ flex: `${card.free ? "0.55" : "0.37"}` }}
        >
          {card.free && <h4>Play for Free!</h4>}
          <p>Prize Pool {card.poolPrize}</p>
          <button>Play Now!</button>
          <span>{card.close}</span>
        </div>
      </div>
    </div>
  );
};

export default Game;
