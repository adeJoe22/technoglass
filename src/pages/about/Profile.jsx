import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { styled } from 'styled-components';
import InnerHero from '../../components/InnerHero';
import Background from '../../assets/background.jpg';
import Card from '../../components/Card';

export default function Profile() {
  return (
    <Container>
      <InnerHero backgroundImage={Background} text='Company Profile' />
      <Box maxWidth='1280px' margin='0 auto' px='25px' py='30px'>
        <Text mt='15px' fontWeight='400' fontSize='16px'>
          Technoglass Industries Limited was established in 2004 as a response
          to the growing demand for indigenous safety glass manyfactureing, and
          since then we have become a leading provider of cutting-edge
          architectural and structural glass solution
        </Text>
        <Text mt='15px' fontWeight='400' fontSize='16px'>
          Our 24/7 facility provides a competitive supply from bespoke one off
          to high volume requirements offering an unrivalled production, quality
          & delivery service – right here in the Nigeria.
        </Text>
        <Text mt='15px' fontWeight='400' fontSize='16px'>
          During this time we have had the honour of supplying many prestigious
          and award winning projects from luxury commercial developments to
          higher education facilities. We offer both experience & innovation in
          flat glass processing and offer a reliable and dedicated supply chain
          partner.
        </Text>
        <Text mt='15px' fontWeight='400' fontSize='16px'>
          For over a decade and a half, we've been the driving force behind
          cutting-edge glass solutions that marry aesthetics, functionality, and
          sustainability. From tempered and laminated glass to intricate
          waterjet cutting and double glazing, our state-of-the-art techniques
          ensure exceptional quality that meets international standards
        </Text>
        <Text mt='15px' fontWeight='400' fontSize='16px'>
          We pride ourselves on being more than just a manufacturer – we're your
          strategic partner, bringing dreams to life through glass. Our products
          are marked with the NIS Mark of Quality, a testament to our unwavering
          dedication to excellence
        </Text>

        <Text mt='15px' fontWeight='400' fontSize='16px'>
          Join us on this journey as we continue to redefine what's possible in
          the world of glass.
        </Text>
        <Text mt='15px' fontWeight='400' fontSize='16px'>
          Welcome to Technoglass – where innovation meets vision.
        </Text>
      </Box>
      {/* <Box maxWidth='1280px' p='25px' margin='0 auto'>
        <Box textAlign='center'>
          <Text mt='10px' fontWeight='700' fontSize='32px'>
            Reflecting our customer needs.
          </Text>
        </Box>
        <Box textAlign='center'>
          <Text mt='10px' fontWeight='400' fontSize='16px'>
            Friendly, competitive & service driven
          </Text>
        </Box>
      </Box> */}
      <Card
        Header='Reflecting our customers need.'
        text='Friendly, competitive & service driven'
        button1Text='Download Brochure'
        button2Text='Enquire More'
      />
    </Container>
  );
}

const Container = styled.div``;
