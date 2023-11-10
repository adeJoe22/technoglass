import React from "react";
import { styled } from "styled-components";
import InnerHero from "../../components/InnerHero";
import Card from "../../components/Card";
import Glass from "../../assets/CH3.jpg";
import Footer from "../../components/Footer";
import UniversalGlass from "../../assets/zenithbank02.jpg";

export default function City() {
  const CityImage = "https://i.ibb.co/Y33YxYc/4580055-orig.jpg";
  const DiamondImage = "https://i.ibb.co/X7cr19T/83809048.webp";
  return (
    <CityWrapper>
      <InnerHero backgroundImage={DiamondImage} text='City' />

      <MidSection>
        <Left>
          <ImageContainer>
            <OfficeText>City</OfficeText>
            <Image style={{ height: "260px" }} src={UniversalGlass} />
          </ImageContainer>
        </Left>

        <Right>
          <Text>
            Urban landscapes offer an ideal platform to showcase the elegance
            and resilience of glass. Whether commuting daily or exploring some
            of the world's most renowned cities, there's a high probability
            you've encountered or interacted with a Technoglass product.
          </Text>

          <Text>
            Our expertise in glass processing has led to the development of
            inventive solutions in the realm of street furniture, including
            digital signage, public transport information systems, and glass for
            bus shelters. Our in-house capabilities encompass ceramic printing,
            which is perfectly suited for street lighting applications.
          </Text>

          <Text>
            Technoglass has collaborated with some of the world's leading
            outdoor advertising agencies to craft unique glass products that
            captivate millions. We have experience with products that employ the
            latest Anti-Reflective and Dielectric coatings to ensure an
            unobstructed connection between you and your customers.
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
