import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { styled } from 'styled-components';
import InnerHero from '../../components/InnerHero';
import Background from '../../assets/CH13.jpg';
import Card from '../../components/Card';
import Ocean from '../../assets/OceanParade.svg';
import Ocean2 from '../../assets/OceanParade2.svg';
import Ocean3 from '../../assets/coscharis.JPG';
import Ocean4 from '../../assets/OceanParade4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import '../../styles/swiper.css';

export default function Profile() {
  const Data = [
    {
      image: Ocean,
      title: 'Glass FACADE',
      desc: 'Ocean Parade Estate, Banana island, Lagos',
    },
    {
      image: Ocean3,
      title: 'Glass Curtain Wall And Partitioning',
      desc: 'Murtala Muhammed International Airport, Ikeja, Lagos',
    },
    {
      image: Ocean2,
      title: 'Glass Curtain Wall',
      desc: 'Coscharis Motors Lekki, Lagos',
    },
    {
      image: Ocean3,
      title: 'Glass Curtain Wall And Partitioning',
      desc: 'Murtala Muhammed International Airport, Ikeja, Lagos',
    },
  ];

  return (
    <Container>
      <InnerHero backgroundImage={Background} text='Company Profile' />
      <Box maxWidth='1280px' margin='0 auto' px='25px' py='30px'>
        <Text mt='15px' fontWeight='400' fontSize='16px'>
          Technoglass Industries Limited was established in 2004 as a response
          to the growing demand for indigenous safety glass manyfactureing.
        </Text>
        <Text>
          Technoglass is a leading provider of high-quality architectural glass
          solutions for commercial and residential projects. It offers a wide
          range of products that enhance the aesthetics, functionality, and
          sustainability of buildings. Its offerings include float glass for
          clarity and insulation, decorative glass for unique designs,
          energy-efficient glass for sustainability of our environment, and
          safety glass for enhanced protection.
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
        {/* <Text mt='15px' fontWeight='400' fontSize='16px'>
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
        </Text> */}

        <Text mt='15px' fontWeight='400' fontSize='16px'>
          Join us on this journey as we continue to redefine what's possible in
          the world of glass.
        </Text>
        <Text mt='15px' fontWeight='400' fontSize='16px'>
          Welcome to Technoglass – where innovation meets vision.
        </Text>
      </Box>
      <Box maxWidth='1280px' p='25px' margin='0 auto'>
        <Text
          textAlign='center'
          textTransform='capitalize'
          fontSize='24px'
          letterSpacing='0.24px'
          fontWeight='600'
          color='#B7CC33'
        >
          Featured Projects
        </Text>
      </Box>
      <Box maxWidth='1280px' margin='0 auto' px='30px'>
        <Swiper
          navigation={true}
          style={{
            '--swiper-pagination-color': '#004332',
            '--swiper-navigation-color': '#004332',
            'navigation-button': '4px',
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView='3'
          direction='horizontal'
          pagination={true}
        >
          {Data.map((item, i) => {
            return (
              <SwiperSlide>
                <Box
                  // className='BgBox2'
                  //   display='flex'
                  //   borderColor='#000'
                  //   maxWidth='350px'
                  //   height='200px'
                  //   width='100%'
                  //   boxShadow='0px 0px 3px rgba(0 , 0 , 0, 0.3)'
                  style={{
                    display: 'flex',
                    maxWidth: '350px',
                    borderRadius: '12px',
                    border: '2px',
                    height: '200px',
                    padding: '0px',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${item.image})`,
                  }}
                ></Box>
                <Box px='5px' width='90%'>
                  <Text
                    textAlign='center'
                    fontSize='18px'
                    letterSpacing='0.24px'
                    fontWeight='600'
                    textTransform='capitalize'
                    color='#B7CC33'
                  >
                    {item.title}
                  </Text>
                  <Text textAlign='center' fontWeight='500' fontSize='14px'>
                    {item.desc}
                  </Text>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      <Box maxWidth='1280px' p='25px' margin='0 auto'>
        {/* <Box
          display='flex'
          mb='20px'
          justifyContent='space-between'
          flexDirection='row'
        >
          <Box>
            <Image src={Ocean} />
            <Text
              fontSize='24px'
              letterSpacing='0.24px'
              fontWeight='600'
              textTransform='capitalize'
              color='#B7CC33'
            >
              Glass FaCADE
            </Text>
            <Text fontSize='16px' fontWeight='500'>
              Ocean Parade Estate, Banana island, Lagos
            </Text>
          </Box>
          <Box>
            <Image src={Ocean2} />
            <Text
              fontSize='24px'
              letterSpacing='0.24px'
              fontWeight='600'
              textTransform='capitalize'
              color='#B7CC33'
            >
              Glass CURTAIN WALL
            </Text>
            <Text fontSize='16px' fontWeight='500'>
              Murtala Muhammed International Airport Ikeja, Lagos
            </Text>
          </Box>
        </Box> */}
        {/* <Box
          display='flex'
          mt='20px'
          justifyContent='space-between'
          flexDirection='row'
        >
          <Box display='flex' flexDirection='row'>
            <Box
              width='40%'
              display='flex'
              flexDirection='column'
              alignItems='center'
            >
              <Text
                fontSize='24px'
                letterSpacing='0.24px'
                fontWeight='600'
                color='#B7CC33'
              >
                Glass CURTAIN WALL
              </Text>
              <Text fontSize='16px' fontWeight='500'>
                Murtala Muhammed International Airport Ikeja, Lagos
              </Text>
            </Box>
            <Image src={Ocean3} />
          </Box>{' '}
          <Box display='flex' width='50%' flexDirection='row'>
            <Image src={Ocean4} />
            <Box>
              <Text textTransform='capitalize' fontWeight='500' color='#B7CC33'>
                Glass Curtains Wall
              </Text>
              <Text textTransform='capitalize' fontSize='16px' fontWeight='500'>
                Coscharis Motors Lekki, Lagos
              </Text>
            </Box>
          </Box>
        </Box> */}
      </Box>
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
