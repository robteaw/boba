import React, { useState } from "react";
import Form from "./Form";
import styled from "styled-components";

export default function Contact() {
  return (
    <Container>
      <h1>Contact</h1>
      <p>
        If you have any questions, concerns or wanting to apply, feel free to
        leave a message. If you are applying please attach your resume and
        provide a short introduction. We'll respond as soon as possible.
      </p>
      <InnerContainer>
        <Form />
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
  h1 {
    margin-bottom: 20px;
  }
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
