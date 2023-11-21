import React from "react";
import { styled } from "styled-components";
import InnerHero from "../../components/InnerHero";
import Card from "../../components/Card";

import Footer from "../../components/Footer";

export default function Washing() {
  const FacilityGlass = "https://i.ibb.co/FbHNsMn/IMG-7164.jpg";
  return (
    <WashingWrapper>
      <InnerHero backgroundImage={FacilityGlass} text='Washing' />

      <MidSection>
        <Text>
          With a rich legacy spanning over 75 years, Technoglass is a
          trailblazer in advanced glass washing technology. Our washers are
          designed for easy maintenance, reliability, and enduring performance,
          setting a benchmark with an unmatched lifespan. These washers are the
          cornerstone of many production lines.
        </Text>
        <Text>
          Technoglass provides solutions for intricate cleaning demands,
          including ultrasonic requirements, and meets the rigorous demands of
          round-the-clock operations. Our cutting-edge washing technology adapts
          to diverse needs, ensuring efficiency and precision. As an industry
          leader, Technoglass empowers partners' success with innovative
          solutions.
        </Text>
      </MidSection>

      <Card
        Header='Reflecting our customers need.'
        text='Friendly, competitive & service driven'
        button1Text='Download Brochure'
        button2Text='Enquire More'
      />

      <Footer />
    </WashingWrapper>
  );
}

const WashingWrapper = styled.div``;
const MidSection = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 40px 0;
`;
// const MidSection = styled.div`
//   padding: 50px 70px;
// `
const Text = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
`;
