import React from "react";
import styled from "styled-components";
// tesing
import Button from "../../components/Button";
import Search from "../../components/Search";

export default function Locations() {
  return (
    <Section>
      <h1>Contact</h1>
      <p>
        If you have any suggestions, questions or concerns, feel free to leave a
        message. We will try to get to you as soon as possible.
      </p>
      <form action="">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" />
        </div>
      </form>
      {/* <Search />
      <Button /> */}
    </Section>
  );
}

const Section = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 5rem;
  h1 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.125rem;
    line-height: 2;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`;
