import React from "react";
import blue from "../../images/boba_blue.png";
import brown from "../../images/boba_brown.png";
import cyan from "../../images/boba_cyan.png";
import green from "../../images/boba_green.png";
import matcha from "../../images/boba_matcha.png";
import pink from "../../images/boba_pink.png";
import purple from "../../images/boba_purple.png";
import red from "../../images/boba_red.png";
import yellow from "../../images/boba_yellow.png";

export default function Boba() {
  return (
    <>
      <div className="card">
        <img src={blue} alt="" />
        <h2>Blueberry</h2>
      </div>
      <div className="card">
        <img src={brown} alt="" />
        <h2>Milk Tea</h2>
      </div>
      <div className="card">
        <img src={cyan} alt="" />
        <h2>Hawaiian</h2>
      </div>
      <div className="card">
        <img src={green} alt="" />
        <h2>Avocado</h2>
      </div>
      <div className="card">
        <img src={matcha} alt="" />
        <h2>Matcha</h2>
      </div>
      <div className="card">
        <img src={pink} alt="" />
        <h2>Hibiscus</h2>
      </div>
      <div className="card">
        <img src={purple} alt="" />
        <h2>Grape</h2>
      </div>
      <div className="card">
        <img src={red} alt="" />
        <h2>Strawberry</h2>
      </div>
      <div className="card">
        <img src={yellow} alt="" />
        <h2>Jackfruit</h2>
      </div>
    </>
  );
}
