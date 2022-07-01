import React from "react";
import styled from "styled-components";
// tesing
import Button from "../../components/Button";
import Search from "../../components/Search";

export default function Locations() {
  return (
    <Container>
      <h1>Contact</h1>
      <p>
        If you have any questions or concerns, feel free to leave a
        message.
      </p>
      <InnerContainer>
      <form action="">
        <div>
          <input type="text" placeholder="First Name" required
                class="form-element" />
        </div>
        <div>
          <input type="text" placeholder="Last Name" required
                class="form-element" />
        </div>
        <div>
          <input type="text" placeholder="Email" required
                className="form-element" />
        </div>
        <div>
          <input type="text" placeholder="Phone Number" class="form-element" />
        </div>
        <div class="form-text">
          <textarea
            name="message"
            id="message"
            required
            class="form-element"
            placeholder="Message"
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

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 20%;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.125rem;
    line-height: 2;
    margin-bottom: 1.5rem;
  }
`;

const InnerContainer = styled.div`
  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    padding: 32px;
    background: var(--bgColor);
    
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
        background-color: var(--mainColor);
      }
    }
  input {
    width: 100%;
    margin: 1rem 0;
    padding: 0.75rem;
  }
  .form-text {
    grid-column: 1 / -1;
  }
  textarea {
    resize: none;
    min-height: 100px;
    padding: 0.75rem;
  }
`

const Submit = styled.div`
  grid-column: 1 / -1;

  input[type="submit"] {
    color: var(--subText);
    background: var(--subColor);
    font-size: 1rem;
    font-weight: 600;
    width: 14rem;
    padding: 0.7rem;
    margin-top: 2.5rem;
    border: 2px solid transparent;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      color: var(--subTextHover);
      background: var(--subHover);
      border: 2px solid var(--subTextHover);
    }
  }
`