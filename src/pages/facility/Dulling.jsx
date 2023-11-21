import React from "react";
import { styled } from "styled-components";
import InnerHero from "../../components/InnerHero";
import Card from "../../components/Card";
// import FacilityGlass from "../../assets/Dulling.jpg";
import Footer from "../../components/Footer";

export default function Dullling() {
  const Dulling = "https://i.ibb.co/1Jw3xPJ/IMG-7174.jpg";

  return (
    <DullingWrapper>
      <InnerHero backgroundImage={Dulling} text='Dulling' />

      <MidSection>
        <Text>
          Dulling, a specialized glass treatment offered by Technoglass,
          involves the careful alteration of glass surfaces to achieve a frosted
          or matte appearance. This process enhances privacy and diffuses light
          while maintaining a sense of elegance and sophistication. Whether
          applied to windows, doors, or interior partitions, the dulling
          technique strikes a balance between aesthetics and functionality,
          allowing natural light to filter through while creating a sense of
          intimacy within spaces.
        </Text>
        <Text>
          At Technoglass, our skilled artisans utilize advanced techniques and
          cutting-edge equipment to achieve consistent and precise dulling
          effects on glass surfaces. The resulting semi-opaque finish not only
          adds a touch of modernity to interiors but also serves as an
          innovative solution for spaces where privacy and light diffusion are
          paramount. From residential to commercial applications, our dulling
          process transforms standard glass into a versatile design element that
          elevates both the visual appeal and functionality of various
          environments.
        </Text>
      </MidSection>

      <Card
        Header='Reflecting our customers need.'
        text='Friendly, competitive & service driven'
        button1Text='Download Brochure'
        button2Text='Enquire More'
      />

      <Footer />
    </DullingWrapper>
  );
}

const DullingWrapper = styled.div``;
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
