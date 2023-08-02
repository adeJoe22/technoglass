import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import InnerHero from '../../components/InnerHero';
import Background from '../../assets/background.jpg';
import Card from '../../components/Card';

export default function QualityAndStandard() {
  return (
    <Box>
      <InnerHero backgroundImage={Background} text='Quality and Standards' />
      <Box maxWidth='1280px' margin='0 auto' px='25px' py='30px'>
        <Text color='#3e3e3e' fontWeight='700' fontSize='52px'>
          Testing & Standards.
        </Text>
        Technoglass holds BSI Kitemark accreditation for our toughened safety
        glass, toughened laminated glass and our heat soaked toughened glass.
        EN12150-1:2000 Certificate number KM658201 – Thermally toughened soda
        lime silicate safety glass. Clear, tinted and low iron toughened glass
        meeting Impact Class 1 (BS EN 12600) EN14179 Glass in Building-heat
        soaked thermally toughened soda lime silicate safety glass. Quality
        Management System ISO 9001:2008 Certificate Number FM13720 E11 R43 ECE
        Regulation 43 Vehicle Glazing License Number E1143R- 000557 BS EN
        14449:2005 Glass in building – Laminated glass and laminated safety
        glass
      </Box>
      <Card
        Header='Reflecting our customers need.'
        text='Friendly, competitive & service driven'
        button1Text='Click here'
        button2Text='Click me'
      />
    </Box>
  );
}
