import React from "react";
import cake from "../../images/cake.png";
import cupcake from "../../images/cupcake.png";
import macaron from "../../images/macaron.png";

export default function Dessert() {
  return (
    <>
      <div className="card">
        <img src={cake} alt="" />
        <h2>Cake</h2>
      </div>
      <div className="card">
        <img src={cupcake} alt="" />
        <h2>Cupcake</h2>
      </div>
      <div className="card">
        <img src={macaron} alt="" />
        <h2>Macaron</h2>
      </div>
    </>
  );
}
