import React from "react";

export default function Search() {
  const [inputValue, setInputValue] = React.useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
}
