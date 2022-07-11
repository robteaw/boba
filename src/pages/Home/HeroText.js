import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroText() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Fresh Delicious Taste</h1>
      <p>Check out our menu and try out the boba tea and desserts.</p>
      <button
        onClick={() => {
          navigate("/menu");
        }}
      >
        Order
      </button>
    </div>
  );
}
