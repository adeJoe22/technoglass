import React from "react";
import { styled } from "styled-components";
import InnerHero from "../../components/InnerHero";
import Card from "../../components/Card";

import Footer from "../../components/Footer";

export default function Laminating() {
  const FacilityGlass = "https://i.ibb.co/WKdBrZ4/IMG-7185.jpg";
  return (
    <LaminatingWrapper>
      <InnerHero backgroundImage={FacilityGlass} text='Laminating' />

      <MidSection>
        <Text>
          The glass doesn’t shatter when broken, reducing the risk of injury. In
          volatile weather, laminated glass will remain in its frame, reducing
          the risk of accidents and making a life-threatening situation slightly
          safer.
        </Text>
        <Text>
          Laminating is a vital process at Technoglass, designed to enhance the
          safety and functionality of our glass products. By bonding two or more
          layers of glass with a robust plastic interlayer, we create a
          composite material that retains its integrity even when shattered,
          significantly reducing the risk of injury.
        </Text>
        <Text>
          Beyond safety, the laminating process also offers additional benefits.
          It provides an effective barrier against noise, making laminated glass
          an excellent choice for environments where sound insulation is
          required. Moreover, the interlayer can be customized with a variety of
          materials, including colored films and fabrics, to create unique
          aesthetic effects or to provide privacy. Laminated glass also blocks
          out harmful UV rays, protecting interiors from sun damage.
        </Text>

        <Text>
          At Technoglass, we are committed to leveraging such advanced processes
          to deliver glass products that not only meet but exceed our clients'
          expectations in terms of safety, functionality, and aesthetics.
        </Text>
      </MidSection>

      <Card
        Header='Reflecting our customers need.'
        text='Friendly, competitive & service driven'
        button1Text='Give us a call'
        button2Text='Send us a mail'
      />

      <Footer />
    </LaminatingWrapper>
  );
}

const LaminatingWrapper = styled.div``;
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
