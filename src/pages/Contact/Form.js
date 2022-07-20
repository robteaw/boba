import React, { useState } from "react";
import styled from "styled-components";

export default function Form() {
  // Format phone number
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => {
    const formattedPhone = formatPhone(e.target.value);
    setInputValue(formattedPhone);
  };

  function formatPhone(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length + 1;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }

  // Form submit stays on same page
  const onSubmit = (e) => {
    e.preventDefault();
  };

  // Submit message
  const [message, setMessage] = useState(false);
  const showMessage = () => setMessage(!message);

  return (
    <>
      <form action="/contact" name="contact" method="POST" onSubmit={onSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            class="form-element"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            class="form-element"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="form-element"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone Number"
            class="form-element"
            required
            onChange={(e) => handleInput(e)}
            value={inputValue}
          />
        </div>
        <Reason>
          <select name="reason" id="reason">
            <option disabled selected>
              Reason
            </option>
            <option value="1">Question</option>
            <option value="2">Concern</option>
            <option value="3">Apply</option>
          </select>
        </Reason>
        <File>
          <input type="file" name="resume" id="resume" />
        </File>
        <div class="form-text">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            class="form-element"
            required
          ></textarea>
        </div>
        <Submit>
          {message ? (
            <span className="message">
              <h2>Form Submitted!</h2>
            </span>
          ) : (
            <input type="submit" value="SEND" onClick={showMessage} />
          )}
        </Submit>
      </form>
    </>
  );
}

// Styling
const Reason = styled.div`
  select {
    appearance: none;
    border: 0;
    font: inherit;
    width: 100%;
    color: var(--subColor);
    background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)
        no-repeat right 0.8em center / 1.4em,
      linear-gradient(to left, var(--selectColor) 3em, var(--btnColor) 3em);
    color: black;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    option {
      color: inherit;
      background-color: var(--textHover);
    }
    /* Remove focus outline */
    &:focus {
      outline: none;
    }
    /* Remove IE arrow */
    &::-ms-expand {
      display: none;
    }
  }
`;

const File = styled.div`
  input[type="file"]::file-selector-button {
    color: var(--subTextHover);
    background: var(--subHover);
    font-size: 1rem;
    font-weight: 600;
    width: 8rem;
    padding: 0.7rem;
    border: 2px solid var(--subTextHover);
    border-radius: 5rem;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      color: var(--subText);
      background: var(--subColor);
      border: 2px solid var(--subColor);
    }
  }
`;

const Submit = styled.div`
  grid-column: 1 / -1;

  input[type="submit"] {
    color: var(--subText);
    background: var(--subColor);
    font-size: 1rem;
    font-weight: 600;
    width: 10rem;
    padding: 0.7rem;
    margin-top: 1rem;
    border: 2px solid transparent;
    border-radius: 5rem;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      color: var(--subTextHover);
      background: var(--subHover);
      border: 2px solid var(--subTextHover);
    }
  }
  .message {
    color: var(--messageColor);
    font-weight: bold;
    transition: 0.4s;
  }
`;
