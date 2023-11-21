import { Box, Text } from "@chakra-ui/react";
import React from "react";
import InnerHero from "../../components/InnerHero";
import Background from "../../assets/CH11.jpg";
import Card from "../../components/Card";

export default function QualityAndStandard() {
  return (
    <Box>
      <InnerHero backgroundImage={Background} text='Quality and Standards' />
      <Box maxWidth='1280px' margin='0 auto' px='25px' py='30px'>
        <Text color='#3e3e3e' fontWeight='700' fontSize='52px'>
          Testing & Standards.
        </Text>
        <p style={{ marginTop: "20px" }}>
          <Text>
            At Technoglass, we've made it our mission to redefine the standard
            for glass products. With our unwavering commitment to safety and
            quality, we're setting the bar high and ensuring your peace of mind.
          </Text>
        </p>
        <p style={{ marginTop: "20px" }}>
          <Text>
            Our glass products stand as a testament to excellence in the
            industry. This commitment to quality extends across various product
            lines, including toughened safety glass, toughened laminated glass,
            and heat-soaked toughened glass. You can trust in our dedication to
            providing the highest quality and safety standards
          </Text>
        </p>
        <p style={{ marginTop: "20px" }}>
          <Text>
            Our toughened safety glass is available in various options,
            including clear, tinted, and low iron toughened glass, all meeting
            the highest standards. This ensures the thermal toughness and safety
            of our soda-lime silicate glass. Technoglass operates under a
            stringent Quality Management System, emphasizing our unwavering
            commitment to upholding the highest standards of quality.
          </Text>
        </p>
        <p style={{ marginTop: "20px" }}>
          <Text>
            When you choose Technoglass, you choose uncompromising safety and
            exceptional quality. Elevate your expectations with us, and
            experience a world where every pane is a masterpiece.
          </Text>
        </p>
      </Box>
      <Card
        Header='Reflecting our customers need.'
        text='Friendly, competitive & service driven'
        button1Text='Download Brochure'
        button2Text='Enquire More'
      />
    </Box>
  );
}
