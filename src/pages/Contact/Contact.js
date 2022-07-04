import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <Container>
      <h1>Contact</h1>
      <p>
        If you have any questions, concerns or wanting to apply, feel free to leave a message. If you are applying please attach your resume and provide a short introduction.
        We'll respond as soon as possible.
      </p>
      <InnerContainer>
        <form action="">
          <div>
            <input
              type="text"
              placeholder="First Name *"
              required
              class="form-element"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name *"
              required
              class="form-element"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email *"
              required
              className="form-element"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone Number *"
              required
              class="form-element"
            />
          </div>
          <div>
            <select name="work" id="work">
              <option disabled selected>Reason</option>
              <option value="remote">Question</option>
              <option value="onlocation">Concern</option>
              <option value="onlocation">Apply</option>
            </select>
          </div>
          <div>
            <input type="file" id="myFile" name="filename" />
          </div>
          <div class="form-text">
            <textarea
              name="message"
              id="message"
              required
              class="form-element"
              placeholder="Message *"
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
  margin: 3rem auto 10rem auto;
  padding: 5rem 20%;
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
        background-color: var(--mainColor);
      }
    }
    input, select {
      width: 100%;
      margin: 1rem 0;
      padding: 0.75rem;
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
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      color: var(--subTextHover);
      background: var(--subHover);
      border: 2px solid var(--subTextHover);
    }
  }
`;
