import React from 'react'
import {styled} from 'styled-components'
import InnerHero from '../../components/InnerHero'
import Card from '../../components/Card'
import Background from '../../assets/background.jpg'
import Footer from '../../components/Footer'
import UniversalGlass from '../../assets/glass-office.jpeg'

export default function Home_Sector() {
  return (
    <HomeWrapper>
         <InnerHero
          backgroundImage={Background}
          text="Home"  
     />

     <MidSection>
      <Left>
        <ImageContainer>
          <OfficeText>Home</OfficeText>
          <Image src={UniversalGlass}/>
        </ImageContainer>
      </Left>

      <Right>
        <Text>
        Creating Inspirational workspace environments requires an inspirational supply partner. Our extensive experience in decorative glass provides our clients with a wealth of opportunity to create truly stunning interior spaces. From high quality, painted glass products to specialist laminates incorporating decorative fabrics, Mi Glass can bring any project to vivid life.
        </Text>

        <Text>
        Our manufacturing capabilities include state of the art vertical and horizontal CNC processing, in-house laminating and screen printing. Mi Glass can also offer digital printing which combines the durability of glass with the latest in hi-resolution print technology to create vibrant images providing the perfect backdrop for any commercial environment.
        </Text>

        <Text>
          Our services include:
          <UnorderedList>
          <OrderedList>Clear Float 1.6mm – 19mm</OrderedList>
          <OrderedList>Clear Float 1.6mm – 19mm</OrderedList>
          <OrderedList>Clear Float 1.6mm – 19mm</OrderedList>
          <OrderedList>Clear Float 1.6mm – 19mm</OrderedList>
          
        </UnorderedList>
        </Text>
      </Right>
     </MidSection>

     <Card
    Header="Reflecting our customers need."
    text="Friendly, competitive & service driven"
    button1Text="Click here"
    button2Text="Click me"
    />

    <Footer />
    </HomeWrapper>
  )
}


const HomeWrapper = styled.div``
const MidSection = styled.div`
  padding: 50px 0;
  display: flex;
  gap: 25px;
  width: 85%;
  margin: auto;
    @media (max-width: 767px) {
    flex-direction: column;
  }
  
`
const Text = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 2;
`
const OfficeText = styled.p`
  font-size: 2rem;
  color: green;
`
const Left = styled.div`
flex: 1;
`
const Right = styled.div`
flex: 2;
`
const ImageContainer = styled.div`
  
`
const Image = styled.img`
  
`
const UnorderedList = styled.ul`
padding-left: 15px;
`
const OrderedList = styled.li`
  font-size: 14px;
`