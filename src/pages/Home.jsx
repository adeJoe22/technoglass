import React from 'react';
import {
  Box,
  Button,
  SimpleGrid,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import GlassImage from '../assets/blurredGlass.jpg';
import GlassImage2 from '../assets/toughenedGlass.jpg';
import GlassImage3 from '../assets/BP.jpg';
import Pexel from '../assets/pexels.jpg';
import Pex from '../assets/pexelsdaniel460.png';
import Bottle from '../assets/Bootleplant.png';
import Jiggle from '../assets/jiggle.svg';
import Wisehelp from '../assets/wisehelp.svg';
import Curb from '../assets/resecurb.svg';
import Symtric from '../assets/symtric.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/homeStyles.scss';
import Footer from '../components/Footer';

export default function Home() {
  const Products = [
    {
      image: Pex,
      title: 'Toughened Laminated Glass',
      description: 'Based in a purpose built 55,000 square feet factory',
    },
    {
      image: Pexel,
      title: 'Wire glass',
      description: 'Based in a purpose built 55,000 square feet factory',
    },
    {
      image: Bottle,
      title: 'Wire glass',
      description:
        'Laminated glass technically has the same strength as regular glass but has a plastic interlayer between two panes of 3mm thick glass, holding them together',
    },
  ];

  const Glass = [
    {
      image: GlassImage,
      text: 'Quality and Standards',
    },
    {
      image: GlassImage2,
      text: 'Innovative Glass Products',
    },
    {
      image: GlassImage3,
      text: 'Boutique Processing',
    },
  ];

  const Data = [
    {
      image: Wisehelp,
    },
    {
      image: Curb,
    },
    {
      image: Symtric,
    },
    {
      image: Jiggle,
    },
  ];
  return (
    <div>
      <Box>
        <Box>
          <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
            {Glass.map((item, i) => (
              <SwiperSlide>
                <Box
                  key={i}
                  border='3px'
                  // p='20px'
                  bgPosition='center'
                  bgSize='cover'
                  height={['67vh', '100vh']}
                  alignItems='center'
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                  bgImage={item.image}
                  bgColor='#000'
                  // bgGradient='linear - gradient(rgba(0, 0, 0, 0.527), rgba(0,0,0,0.5))'
                  // bgImage={linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , {item.image}}
                >
                  <Box p='10px 15px'>
                    <Text
                      // pt='-30px'
                      fontSize={['24px', '42px']}
                      fontWeight='600'
                      color='#FFF'
                    >
                      {item.text}
                    </Text>
                  </Box>
                  <Button variant='outline' colorScheme='whatsapp' p='10px'>
                    {item.text}
                  </Button>
                </Box>
                {/* <Image width='100%' src={item.image} alt='' /> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Box bg='#00221B' p='15px'>
          <Text
            color='#FFF'
            textAlign='center'
            fontWeight='600'
            fontSize='28px'
          >
            Welcome to Techno-Glass, one of the leading Glass Manufacturers in
            Nigeria
          </Text>
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          p={['15px 20px']}
          pb={['80px', '0px']}
          justifyContent='center'
        >
          <Box py='25px' margin='0 auto'>
            <Text fontWeight='700' fontSize={['42px', '48px']}>
              Market Sector
            </Text>
          </Box>
          <Box px='35px' mb='30px' height={[null, '40vh']} py='30px'>
            <SimpleGrid
              mt='40px'
              spacing='20px'
              minChildWidth='230px'
              direction='row'
              mb='30px'
            >
              {Data.map((item, i) => (
                <Box
                  height={['105px', '150px']}
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  borderRadius='6px'
                  bg='#BFD0CD'
                  key={i}
                >
                  <Image src={item.image} alt='' />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
        <Box
          display='flex'
          height='50vh'
          flexDirection={['column-reverse', 'column-reverse', 'row']}
        >
          <Box bg='#00221B' color='#FFF' width={['100%', '100%', '50%']}>
            <Box>
              <Box p='10%  15%'>
                <Box>
                  <Text fontWeight='700' fontSize='32px'>
                    A fast, safe & efficient delivery service
                  </Text>
                  <Text mt='15px' fontWeight='400' fontSize='16px'>
                    Based in a purpose built 55,000 square feet factory on the
                    outskirts of Lagos with easy access to all the major
                    motorways.
                  </Text>
                </Box>
                <Box py='25px'>
                  <Button
                    color='#FFF'
                    p='12px 26px'
                    borderRadius='48px'
                    letterSpacing='3px'
                    textTransform='uppercase'
                    variant='outline'
                  >
                    Facility
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box width={['100%', '100%', '50%']} className='imageContainer'></Box>
        </Box>
        <Box pt='30px' pb='30px' bg='#F7F7F7'>
          <Box p='20px' margin='0 auto' textAlign='center' maxWidth='1280px'>
            <Text fontWeight='700' fontSize={['42px', '48px']}>
              FAQ's.
            </Text>
          </Box>

          <Box
            maxWidth='1200px'
            width='100%'
            margin='0 auto'
            p='15px 20px'
            mt='25px'
          >
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      <Text fontSize='16px' fontWeight='500'>
                        What industries do you manufacture glass for?
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      What uses do you manufacture glass for?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      What types of Glass do you manufacture?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      What stages of glass manufacturing does MiGlass perform?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      What uses do you manufacture glass for?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
        <Box>
          <Box textAlign='center' px='20px' py='30px' margin='0 auto'>
            <Text fontWeight='700' fontSize={['42px', '48px']}>
              Latest Techno Glass Articles.
            </Text>
          </Box>
          <Box
            width='100%'
            margin='0 auto'
            maxWidth='1280px'
            py='20px'
            px='35px'
          >
            <SimpleGrid
              mt='40px'
              spacing='20px'
              minChildWidth='260px'
              direction='row'
            >
              {Products.map((item, i) => (
                <Box key={i}>
                  <Image
                    pointer='cursor'
                    width='100%'
                    src={item.image}
                    alt=''
                  />
                  <Box p='10px' textAlign='center'>
                    <Text fontWeight='600' fontSize='22px'>
                      {item.title}
                    </Text>
                  </Box>
                  <Box p='8px' textAlign='center'>
                    <Text fontWeight='400' fontSize='16px'>
                      {item.description}
                    </Text>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
