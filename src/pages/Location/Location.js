import React from "react";
import styled from "styled-components";

export default function Location() {
  return (
    <Container>
      <InnerContainer>
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=8305%20franz%20rd%20katy,%20tx+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="auto"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
        <Right>
          <h1>Katy</h1>
          <h2>Address</h2>
          <p>8305 Franz Rd</p>
          <p>Katy, TX 77449</p>
          <p>(281) 908-2755</p>
          <h2>Hours</h2>
          <p>Monday - Friday</p>
          <p>10:00 am - 6:30 pm</p>
          <p>Saturday - Sunday</p>
          <p>9:00am - 7:30 pm</p>
        </Right>
      </InnerContainer>
      <InnerContainer>
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=5022%20Louetta%20Rd%20spring,%20tx+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="auto"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
        <Right>
          <h1>Spring</h1>
          <h2>Address</h2>
          <p>5022 Louetta Rd</p>
          <p>Spring, TX 77388</p>
          <p>(281) 723-4301</p>
          <h2>Hours</h2>
          <p>Monday - Friday</p>
          <p>10:00 am - 6:30 pm</p>
          <p>Saturday - Sunday</p>
          <p>9:00am - 7:30 pm</p>
        </Right>
      </InnerContainer>
    </Container>
  );
}

// styling
const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 0;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  padding: 5rem;
  display: flex;
  column-gap: 10rem;
  align-items: center;
  justify-content: center;
  iframe {
    height: 24rem;
    width: 24rem;
  }
  h1 {
    margin-bottom: 1rem;
  }
  p {
    :nth-child(8) {
      margin-left: 1rem;
    }
    :nth-child(10) {
      margin-left: 1rem;
    }
  }
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    iframe {
      margin-top: 3rem;
    }
  }
`;

const Right = styled.div``;
