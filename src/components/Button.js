import React, { useState } from "react";

export default function Button() {
  const [value, setValue] = useState("Press Here");
  const dummyFunction = () => {
    setValue("You Clicked");
  };

  return (
    <div>
      <button onClick={dummyFunction} title="dummyButton">
        {value}
      </button>
    </div>
  );
}
