import React from "react";
import { styled } from "styled-components";
import InnerHero from "../../components/InnerHero";
import Card from "../../components/Card";
import Glass from "../../assets/windowsplastic.jpeg";
import Footer from "../../components/Footer";
import UniversalGlass from "../../assets/bullet-proof-glass.jpeg";

export default function BulletResistance() {
  return (
    <CityWrapper>
      <InnerHero backgroundImage={Glass} text='Bullet Resistant Glass' />

      <MidSection>
        <Left>
          <ImageContainer>
            <OfficeText>Bullet Resistant Glass</OfficeText>
            <Image src={UniversalGlass} />
          </ImageContainer>
        </Left>

        <Right>
          <Text>
            Technoglass is a specialist in crafting bullet-resistant glass,
            often termed bulletproof or ballistic glass. This specialized glass
            is formulated using specialized transparent materials that have been
            meticulously engineered to withstand bullet impact, delivering a
            heightened level of security and protection.
          </Text>

          <Text>
            Bullet-resistant glass serves as a pivotal component within
            intricate barrier systems, acting as the linchpin in setups like
            bank teller enclosures or external storefront windows, where
            security takes precedence. Diverse materials such as acrylic,
            polycarbonate, conventional glass, and laminated combinations like
            Glass-Clad Polycarbonate contribute to its construction.
          </Text>
        </Right>
      </MidSection>

      <Card
        Header='Reflecting our customers need.'
        text='Friendly, competitive & service driven'
        button1Text='Download Brochure'
        button2Text='Enquire More'
      />

      <Footer />
    </CityWrapper>
  );
}

const CityWrapper = styled.div``;
const MidSection = styled.div`
  padding: 50px 0;
  display: flex;
  gap: 25px;
  width: 85%;
  margin: auto;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const Text = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 2;
`;
const OfficeText = styled.p`
  font-size: 2rem;
  color: green;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 2;
`;
const ImageContainer = styled.div``;
const Image = styled.img``;
// const UnorderedList = styled.ul`
// padding-left: 15px;
// `
// const OrderedList = styled.li`
//   font-size: 14px;
// `
