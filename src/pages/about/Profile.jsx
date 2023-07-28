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
        <Text mt='10px' fontWeight='400' fontSize='16px'>
          MiGlass is one of the largest independent glass processors and Glass
          Manufacturers in Europe providing a turnkey solution for all flat
          glass processing needs & specialising in decorative glass products for
          all markets.{' '}
        </Text>
        <Text mt='10px' fontWeight='400' fontSize='16px'>
          Our 24/7 facility provides a competitive supply from bespoke one off
          to high volume requirements offering an unrivalled production, quality
          & delivery service – right here in the UK.
        </Text>
        <Text mt='10px' fontWeight='400' fontSize='16px'>
          We are proud to be an owner managed company with over 80 years of
          glass expertise. During this time we have had the honour of supplying
          many prestigious and award winning projects from luxury commercial
          developments to higher education facilities. We offer both experience
          & innovation in flat glass processing and offer a reliable and
          dedicated supply chain partner.
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
        button1Text='Click here'
        button2Text='Click me'
      />
    </Container>
  );
}

const Container = styled.div``;
