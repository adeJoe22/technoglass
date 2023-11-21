import React from "react";
import { styled } from "styled-components";
import InnerHero from "../../components/InnerHero";
import Card from "../../components/Card";

import Footer from "../../components/Footer";

export default function Drilling() {
  const FacilityGlass = "https://i.ibb.co/ZVR468b/IMG-7155.jpg";
  return (
    <DrillngWrapper>
      <InnerHero backgroundImage={FacilityGlass} text='Drilling' />

      <MidSection>
        <Text>
          Drilling is a crucial step in our glass manufacturing process at
          Technoglass. We employ cutting-edge drilling techniques to create
          precise holes in the glass, which are essential for various
          applications. Our advanced methods ensure that the drilling process is
          carried out without causing any damage to the glass material,
          maintaining its structural integrity and aesthetic appeal.
        </Text>
        <Text>
          The drilling process in glass manufacturing opens up a world of
          possibilities in terms of fixing options while preserving the panel's
          structural and aesthetic functions. Technoglass is proud to house
          Nigeria's first fully integrated vertical CNC and Drilling line,
          setting us apart in terms of quality, efficiency, and accuracy. This
          is particularly beneficial for balustrade companies seeking unmatched
          precision.
        </Text>
        <Text>
          Our capabilities extend to drilling multiple hole sizes and
          countersinking to accommodate a wide range of fixtures and fittings.
          We also offer drilled mirrors with CNC edge working and a
          comprehensive selection of safety or adhesion films. These additional
          features ensure the safety and performance of our finished products,
          further solidifying Technoglass's position as a leader in the glass
          manufacturing industry.
        </Text>
      </MidSection>

      <Card
        Header='Reflecting our customers need.'
        text='Friendly, competitive & service driven'
        button1Text='Download Brochure'
        button2Text='Enquire More'
      />

      <Footer />
    </DrillngWrapper>
  );
}

const DrillngWrapper = styled.div``;
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
