import React from "react";
import { styled } from "styled-components";
import InnerHero from "../../components/InnerHero";
import Card from "../../components/Card";

import Footer from "../../components/Footer";

export default function Tempering() {
  const FacilityGlass = "https://i.ibb.co/WWdBK4P/IMG-7197.jpg";
  return (
    <TemperingWrapper>
      <InnerHero backgroundImage={FacilityGlass} text='Tempering' />

      <MidSection>
        <Text>
          Tempering is a critical procedure in our production line at
          Technoglass, enhancing the durability and safety of our glass
          products. Our state-of-the-art tempering furnace machine facilitates
          this process, ensuring that the glass is tempered to the highest
          standards. This process results in a product that is significantly
          stronger and safer than regular glass.
        </Text>
        <Text>
          In addition to enhancing the strength of our glass, the tempering
          process also changes the way the glass breaks. Instead of shattering
          into sharp, dangerous shards, tempered glass fractures into small,
          relatively harmless pieces. This characteristic makes it an ideal
          choice for applications where safety is paramount.
        </Text>
        <Text>
          Furthermore, tempered glass exhibits superior resistance to thermal
          stress and impact, making it suitable for a wide range of
          applications, from architectural glazing to automotive windows. At
          Technoglass, we continuously strive to leverage advanced processes
          like tempering to deliver high-quality, safe, and durable glass
          products to our clients.
        </Text>
      </MidSection>

      <Card
        Header='Reflecting our customers need.'
        text='Friendly, competitive & service driven'
        button1Text='Give us a call'
        button2Text='Send us a mail'
      />

      <Footer />
    </TemperingWrapper>
  );
}

const TemperingWrapper = styled.div``;
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
