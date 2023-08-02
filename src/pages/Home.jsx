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
// import ManLogo from '../assets/man_logo.png';
import Coscharis from '../assets/coscharisLogo.png';
import DiamondBank from '../assets/DiamondBankNigeria.jpg';
import Tata from '../assets/TataMotors.png';
import BplLogo from '../assets/BPL_Logo.png';
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
      title: 'Toughened glass.',
      description: 'Based in a purpose built 55,000 square feet factory',
    },
    {
      image: Pexel,
      title: 'Laminated Glass',
      description:
        'This low-emissivity glass reduce UV heat gain from the sun and reduce noise pollution',
    },
    {
      image: Bottle,
      title: 'Insulated Glass',
      description:
        'Insulated glass contribute to a conducive workspace, optimized energy usage, and productivity in factories and warehouse',
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
    // {
    //   image: BplLogo,
    // },
    // {
    //   image: DiamondBank,
    // },
    // {
    //   image: Tata,
    // },
    // {
    //   image: Coscharis,
    // },
    {
      image: Wisehelp,
    },
    {
      image: Curb,
    },
    {
      image: Jiggle,
    },
    {
      image: Symtric,
    },
  ];
  return (
    <div>
      <Box>
        <Box>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            style={{
              '--swiper-pagination-color': '#fff',
              '--swiper-navigation-color': '#fff',
            }}
            className='mySwiper'
          >
            {Glass.map((item, i) => (
              <SwiperSlide>
                <div
                  style={{
                    backgroundColor: '#000',
                    // backgroundImage: `url(${item.image})`,
                  }}
                >
                  <Box
                    key={i}
                    className='imgContainer'
                    height={['67vh', '100vh']}
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      padding: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                    // border='3px'
                    // bgPosition='center'
                    // bgSize='cover'
                    // alignItems='center'
                    // display='flex'
                    // flexDirection='column'
                    // justifyContent='center'
                  >
                    <Box
                      p='10px 15px'
                      display='flex'
                      justifyContent='center'
                      alignItems='center'
                    >
                      <Text
                        textAlign='center'
                        fontSize={['22px', '42px']}
                        fontWeight='600'
                        color='#FFF'
                      >
                        {item.text}
                      </Text>
                    </Box>
                    <Button
                      bgGradient='linear(91.32deg,rgba(255, 255, 255, 0.2) 0%, rgba(255, 255,   255, 0.05) 98.96%)'
                      variant='outline'
                      color='#FFF'
                      colorScheme='whiteAlpha'
                      p='20px'
                      opacity={30}
                    >
                      {item.text}
                    </Button>
                  </Box>
                </div>
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
              columns={[2, null, 3]}
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
                  bg='#FFF'
                  p='2px'
                  boxShadow='2px 3px 5px 0px rgba(0,0,0,0.75)'
                  key={i}
                >
                  <Image
                    src={item.image}
                    width={['90%', '95%', '99%']}
                    alt=''
                  />
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
                    _hover={{
                      backgroundColor: '#668f86',
                    }}
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
                        What types of Glass do you manufacture?
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Technoglass Industries Limited specializes in the
                  manufacturing and processing of glass products, including
                  safety and security glass, decorative laminated glass,
                  windows, doors, curtain walls, and other architectural glass
                  solutions
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      <Text fontSize='16px' fontWeight='500'>
                        What is safety glass, and why is it essential?
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Safety glass is a type of glass that undergoes a heat
                  treatment process, such as toughening or tempering, to
                  increase its strength and safety properties. It is essential
                  because, in the event of breakage, safety glass crumbles into
                  small, granular pieces instead of sharp shards, minimizing the
                  risk of injury.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      <Text fontSize='16px' fontWeight='500'>
                        Is Technoglass glass compliant with local and
                        international standards?
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Yes, all Technoglass products are manufactured to meet the
                  highest quality standards and comply with both local and
                  international regulations.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      <Text fontSize='16px' fontWeight='500'>
                        Can Technoglass Industries Limited provide custom glass
                        solutions?
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Yes, Technoglass Industries Limited offers custom glass
                  solutions tailored to meet specific requirements. Whether it's
                  a unique size, shape, color, or design, our team can work
                  closely with clients to deliver personalized glass products.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      <Text fontSize='16px' fontWeight='500'>
                        Does Technoglass Industries Limited offer installation
                        services?
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Yes, Technoglass Industries Limited offers professional
                  installation services for its glass products. Our skilled team
                  of Installers ensures that the glass is installed with
                  precision and adherence to industry standards.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      <Text fontSize='16px' fontWeight='500'>
                        What are the advantages of using toughened glass?
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Toughened glass offers several advantages, including increased
                  strength, resistance to thermal stress, improved safety, and
                  compliance with safety glazing regulations. It is ideal for
                  applications where safety, durability, and resistance to
                  breakage are critical.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      <Text fontSize='16px' fontWeight='500'>
                        What is laminated glass, and what are its applications?
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Laminated glass consists of two or more layers of glass bonded
                  together with an interlayer, typically made of polyvinyl
                  butyral (PVB). This process creates a strong and durable glass
                  that remains intact even if shattered. Laminated glass is
                  commonly used in windows, doors, skylights, glass floors, and
                  areas where safety and security are paramount.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      <Text fontSize='16px' fontWeight='500'>
                        How can I request a quote or get more information about
                        Technoglass products?
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  To request a quote or obtain more information about our
                  products and services, you can contact our sales team directly
                  through phone or email. You can also visit our website for
                  more details and to explore our product catalog.
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
                    maxWidth='800px'
                    height='260px'
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
