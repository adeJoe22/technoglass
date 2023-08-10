import React from 'react';
import { styled } from 'styled-components';
import InnerHero from '../../components/InnerHero';
import Card from '../../components/Card';
import CNCGlass from '../../assets/glassbuilding.jpeg';
import Footer from '../../components/Footer';
import { Box } from '@chakra-ui/react';

export default function CNC() {
  return (
    <CNCWrapper>
      <InnerHero backgroundImage={CNCGlass} text='CNC Cutting table' />
      <Box p='20px'>
        <MidSection>
          <Text>
            At Technoglass, we harness the power of Computerized Numerical
            Control (CNC) Technology to achieve precise cutting and finishing of
            glass. Our significant investment in cutting-edge CNC technology has
            unlocked a myriad of possibilities in the realm of glass design.
          </Text>
          <Text>
            We are equipped to create virtually any shape, either from templates
            or directly from DXF files, ensuring unparalleled accuracy and
            quality. Our advanced facility includes the unique capability to
            process glass vertically, which not only reduces lead times but also
            guarantees superior quality. This feature is particularly beneficial
            for the balustrade market, which requires a high level of precision
            and aesthetic appeal.
          </Text>
          <Text>
            Our CNC machines have the capacity to cut and polish glass up to
            19mm thick, including making cut-outs for hinges and crafting
            specialized internal radius corners.
          </Text>
        </MidSection>
      </Box>
      <Card
        Header='Reflecting our customers need.'
        text='Friendly, competitive & service driven'
        button1Text='Give us a call'
        button2Text='Send us a email'
      />

      <Footer />
    </CNCWrapper>
  );
}

const CNCWrapper = styled.div``;
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
