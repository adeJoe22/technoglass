import React from 'react'
import {styled} from 'styled-components'
import InnerHero from '../../components/InnerHero'
import Card from '../../components/Card'
import Background from '../../assets/background.jpg'
import Footer from '../../components/Footer'
import UniversalGlass from '../../assets/glass-office.jpeg'

export default function Leisure() {
  return (
    <LeisureWrapper>
         <InnerHero
          backgroundImage={Background}
          text="Leisure"  
     />

     <MidSection>
      <Left>
        <ImageContainer>
          <OfficeText>Leisure</OfficeText>
          <Image src={UniversalGlass}/>
        </ImageContainer>
      </Left>

      <Right>
        <Text>
        In the fast-paced rhythm of contemporary life, moments of leisure have become increasingly valuable. Whether it's indulging in the luxury of a top-tier hotel, a family visit to a museum, or simply relishing time in a bar with friends, Technoglass has crafted glass products that surpass our customers' expectations.
        </Text>

        <Text>
        Our commitment to innovation and quality ensures that our glass solutions enhance the aesthetic and functional appeal of leisure spaces. From the subtle elegance of glass partitions in hotels to the interactive displays in museums, our products are designed to elevate the user experience. With Technoglass, leisure spaces are transformed into captivating environments that blend comfort, style, and sophistication.
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
    </LeisureWrapper>
  )
}


const LeisureWrapper = styled.div``
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
// const UnorderedList = styled.ul`
// padding-left: 15px;
// `
// const OrderedList = styled.li`
//   font-size: 14px;
// `