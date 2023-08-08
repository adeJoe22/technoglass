import React from 'react'
import {styled} from 'styled-components'
import InnerHero from '../../components/InnerHero'
import Card from '../../components/Card'
import Background from '../../assets/background.jpg'
import Footer from '../../components/Footer'
import UniversalGlass from '../../assets/glass-office.jpeg'

export default function Residential() {
  return (
    <HomeWrapper>
         <InnerHero
          backgroundImage={Background}
          text="Residential"  
     />

     <MidSection>
      <Left>
        <ImageContainer>
          <OfficeText>Residential</OfficeText>
          <Image src={UniversalGlass}/>
        </ImageContainer>
      </Left>

      <Right>
        <Text>
        Technoglass boasts a rich history of providing the Kitchen, Bedroom, and Bathroom sectors with innovative glass solutions that perfectly blend functionality with visual appeal.
        </Text>

        <Text>
        Our products are strategically utilized throughout residences to enhance illumination, security, and safeguarding.
        </Text>

        <Text>
        As a preferred supplier for numerous Home Improvement chains, Technoglass is equipped to offer custom packaging and logistics solutions to accommodate large-scale glass needs.
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
margin: auto;
`
const ImageContainer = styled.div`
  
`
const Image = styled.img`
  
`
// const UnorderedList = styled.ul`
// padding-left: 15px;
// `
// const OrderedList = styled.li`
//   font-size: 14px;
// `