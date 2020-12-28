import React from "react";
import "./Slider.css";
import offersBg from "../../../img/offers_bg.png";
import offersFg from "../../../img/offers_fg.png";

const Slider = () => {
  return (
    <div
      className="slider"
      style={{ backgroundImage: `url(${offersBg})`, height: "420px" }}
    >
      <div>
        <img className="slider__img" src={offersFg} alt="slider" />
        <div className="slider__info">
          <div>
            <h3>Loving Quizando?</h3>
            <h3>Want to play more?</h3>
          </div>
          <p>
            We’ve got two special offers running right now which give you even
            more token bang for your buck!
          </p>
          <button>Click here</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
