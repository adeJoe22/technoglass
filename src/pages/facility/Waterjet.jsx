import React from "react";
import { styled } from "styled-components";
import InnerHero from "../../components/InnerHero";
import Card from "../../components/Card";
// import FacilityGlass from '../../assets/glass-city.jpg'
import Footer from "../../components/Footer";
const FacilityGlass = "https://i.ibb.co/myqhxx0/IMG-7122.jpg";
export default function Waterjet() {
  return (
    <WaterjetWrapper>
      <InnerHero
        backgroundImage={FacilityGlass}
        text='Waterjet / CNC Processing'
      />

      <MidSection style={{ padding: "20px", paddingTop: "50px" }}>
        <Text>
          Technoglass utilizes waterjet cutting technology in its manufacturing
          processes to achieve precise and intricate cuts in its glass products.
          This advanced technique ensures exceptional precision and accuracy
          while preserving the integrity of the glass material.
        </Text>
        <Text>
          In addition to its precision, waterjet cutting technology offers a
          versatile solution for shaping glass into complex designs without the
          risk of breakage or damage. This method allows for the creation of
          intricate patterns and shapes, opening up a world of possibilities for
          custom glass designs.
        </Text>
        <Text>
          Moreover, waterjet cutting is a cold process, meaning it doesn't
          generate heat that could potentially distort or damage the glass. This
          makes it an ideal choice for projects that require a high level of
          detail and precision. At Technoglass, we continually invest in such
          advanced technologies to ensure we deliver the highest quality
          products to our clients, meeting their diverse needs and exceeding
          their expectations.
        </Text>
      </MidSection>

      <Card
        Header='Reflecting our customers need.'
        text='Friendly, competitive & service driven'
        button1Text='Give us a call'
        button2Text='Send us a mail'
      />

      <Footer />
    </WaterjetWrapper>
  );
}

const WaterjetWrapper = styled.div``;
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
