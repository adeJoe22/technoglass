import React from "react";
import { styled } from "styled-components";
import InnerHero from "../../components/InnerHero";
import Card from "../../components/Card";
import Background from "../../assets/CH11.jpg";
import Footer from "../../components/Footer";
import UniversalGlass from "../../assets/RetailGlass.jpeg";

export default function Retail() {
  return (
    <RetailWrapper>
      <InnerHero backgroundImage={Background} text='Retail' />

      <MidSection>
        <Left>
          <ImageContainer>
            <OfficeText>Retail</OfficeText>
            <Image src={UniversalGlass} />
          </ImageContainer>
        </Left>

        <Right>
          <Text>
            At Technoglass, we are proud of our track record in delivering
            custom-made glass solutions to some of the most renowned retail
            brands worldwide. Whether it's a small-scale store makeover or a
            large international retail overhaul, our expertise and resources are
            at your disposal. We leverage our extensive experience across
            various sectors to collaborate with our clients, ensuring we meet
            project deadlines and stay within budget.
          </Text>

          <Text>
            From mass-produced glass shelving to cutting-edge point-of-purchase
            display solutions, Technoglass provides an all-encompassing answer
            to your glass needs.
          </Text>

          <Text>
            We are excited to offer an extensive selection of specialized
            digital display glass, including the latest generation of
            non-metallic mirrors that are compatible with all touchscreen
            technologies. Furthermore, we also provide a wide selection of
            anti-reflective glass, perfect for premium display cases.
          </Text>
        </Right>
      </MidSection>

      <Card
        Header='Reflecting our customers need.'
        text='Friendly, competitive & service driven'
        button1Text='Give us a call'
        button2Text='Send us a mail'
      />

      <Footer />
    </RetailWrapper>
  );
}

const RetailWrapper = styled.div``;
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
