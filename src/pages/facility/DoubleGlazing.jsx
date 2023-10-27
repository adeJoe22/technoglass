import React from "react";
import { styled } from "styled-components";
import InnerHero from "../../components/InnerHero";
import Card from "../../components/Card";
import FacilityGlass from "../../assets/glass.jpg";
import Footer from "../../components/Footer";

export default function DoubleGlazing() {
  return (
    <GlazingWrapper>
      <InnerHero backgroundImage={FacilityGlass} text='Double Glazing' />

      <MidSection>
        <Text>
          Double glazing, a process that Technoglass has mastered, involves
          sealing together two panes of glass with an intervening air gap. This
          technique significantly enhances the thermal efficiency of the glass,
          making it a preferred choice for energy-conscious applications. Our
          dedicated double glazing line ensures that we consistently deliver
          top-tier double-glazed glass products.
        </Text>
        <Text>
          The benefits of double glazing extend beyond energy efficiency. The
          air gap between the panes acts as an effective insulator, reducing
          heat transfer between the interior and exterior environments. This
          means that in hot weather, the heat stays outside, and in cold
          weather, the warmth stays inside, leading to a more comfortable living
          or working environment and lower energy bills.
        </Text>
        <Text>
          Moreover, double glazing also provides excellent sound insulation,
          reducing noise pollution from busy streets or noisy neighborhoods. The
          two panes of glass and the air gap work together to dampen sound
          waves, making double-glazed windows ideal for buildings in
          high-traffic areas.
        </Text>

        <Text>
          At Technoglass, we are committed to leveraging our advanced double
          glazing line to produce high-quality, energy-efficient, and
          sound-insulating glass products that meet the diverse needs of our
          clients. Our double-glazed glass is not just a product; it's a
          solution for a more comfortable, quieter, and energy-efficient
          environment.
        </Text>
      </MidSection>

      <Card
        Header='Reflecting our customers need.'
        text='Friendly, competitive & service driven'
        button1Text='Give us a call'
        button2Text='Send us a mail'
      />

      <Footer />
    </GlazingWrapper>
  );
}

const GlazingWrapper = styled.div``;
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
