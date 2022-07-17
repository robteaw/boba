import React, { useState } from "react";
import styled from "styled-components";

export default function Contact() {
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

  return (
    <Container>
      <h1>Contact</h1>
      <p>
        If you have any questions, concerns or wanting to apply, feel free to
        leave a message. If you are applying please attach your resume and
        provide a short introduction. We'll respond as soon as possible.
      </p>
      <InnerContainer>
        <form action="/contact" name="contact" method="POST" onSubmit="submit">
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
            <input type="file" id="resume" name="resume" />
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
            <input type="submit" value="SEND" />
          </Submit>
        </form>
      </InnerContainer>
    </Container>
  );
}

// styling
const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 8rem 15%;
  align-items: center;
  text-align: center;
  p {
    margin-bottom: 1.5rem;
    text-align: left;
  }
`;

const InnerContainer = styled.div`
  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    .form-element {
      grid-column: 1 / -1;
      appearance: none;
      outline: none;
      border: none;
      display: block;
      width: 100%;
      border-radius: 8px;
      padding: 12px 16px;
      background-color: #f3f3f3;
      transition: 0.4s;
      &:focus {
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
      }
    }
    input,
    select {
      width: 100%;
      margin: 0.5rem 0;
      padding: 0.75rem;
      border-radius: 0.5rem;
    }
    input:focus {
      background-color: var(--subText);
    }
    textarea:focus {
      background-color: var(--subText);
    }
    .form-text {
      grid-column: 1 / -1;
    }
    textarea {
      resize: vertical;
      min-height: 100px;
      padding: 0.75rem;
    }
  }
`;

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
`;
