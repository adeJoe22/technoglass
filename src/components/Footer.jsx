import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';
import TecnoLogo from '../assets/Tecnologo.png';

function Footer() {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <Box
        width='100%'
        display='flex'
        justifyContent='center'
        flexDirection='column'
        color='#FFF'
        maxWidth='1280px'
        p='20px 25px'
        margin='0 auto'
      >
        <Box
          display='flex'
          justifyContent='space-between'
          margin='0 auto'
          //   border='2px'
          width='100%'
          py={['0px', '20px']}
          px={['0px', '20px']}
          flexDirection={['column', 'column', 'row']}
        >
          <Box maxWidth='290px'>
            <Image src={TecnoLogo} width='260px' alt='' />
            <Box width='100%'>
              <Text
                fontSize='16px'
                fontWeight='400'
                color='rgba(255, 255, 255, 0.50)'
                textAlign='center'
              >
                A Subsidiary of Crystal Glass Nig LTD
              </Text>
            </Box>
          </Box>{' '}
          <Box>
            <Text
              fontSize='16px'
              color=' #787878'
              lineHeight='30px'
              fontWeight='400'
            >
              Contact
            </Text>

            <Box>
              <Text
                fontSize='18px'
                color=' #B7CC33'
                lineHeight='30px'
                fontWeight='400'
              >
                + 234-703 274 9126
              </Text>
            </Box>
            <Box>
              <Text
                fontSize='18px'
                color=' #B7CC33'
                lineHeight='30px'
                fontWeight='400'
              >
                {' '}
                + 234-810 274 9230
              </Text>
            </Box>
            <Box>
              <Text
                fontSize='18px'
                color=' #B7CC33'
                lineHeight='30px'
                fontWeight='400'
              >
                + 234-709 814 7949
              </Text>
            </Box>
          </Box>
          <Box>
            <Text
              fontSize='16px'
              color=' #787878'
              lineHeight='30px'
              fontWeight='400'
            >
              Find Us
            </Text>
            <Box maxWidth='360px' width='100%'>
              <Text
                fontSize='18px'
                fontWeight='500'
                lineHeight='30px'
                color='#B7CC33'
              >
                Lagos, Nigeria.{' '}
              </Text>
              <Text
                color='#F8FAEB'
                fontSize='16px'
                fontWeight='400'
                lineHeight='30px'
              >
                Plot C62, Crystal Glass Close, Amowo Odofin Industrial Estate,
                Off Oshodi Apapa Expressway, Lagos, Nigeria.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          display='flex'
          mt='40px'
          mb='20px'
          justifyContent='space-between'
          py={['0px', '20px']}
          px={['0px', '20px']}
          flexDirection={['column', 'column', 'row']}
        >
          <Box>
            <Text fontSize='16px' fontWeight='500' color='#8896AB'>
              © 2023 Flex. All rights reserved.
            </Text>
          </Box>
          <Box>
            <Text fontSize='18px' fontWeight='400' color='#B7CC33'>
              info@technoglassng.com
            </Text>
          </Box>
          <Box
            display='flex'
            justifyContent='space-between'
            flexDirection='row'
            p={['0px', '10px']}
            py={['15px', '20px']}
            maxWidth='220px'
            width='100%'
          >
            <Box cursor='pointer'>
              <FaFacebookSquare size={24} />
            </Box>
            <Box cursor='pointer'>
              <FaInstagram size={24} />
            </Box>
            <Box cursor='pointer'>
              <FaTwitterSquare size={24} />
            </Box>
            <Box cursor='pointer'>
              <FaLinkedin size={24} />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
