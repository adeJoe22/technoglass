import React from 'react'
import {styled} from 'styled-components'
import InnerHero from '../../components/InnerHero'
import Card from '../../components/Card'
import Background from '../../assets/background.jpg'
import Footer from '../../components/Footer'
import UniversalGlass from '../../assets/glass-office.jpeg'

export default function Office() {
  return (
    <OfficeWrapper>
         <InnerHero
          backgroundImage={Background}
          text="Office"  
     />

     <MidSection>
      <Left>
        <ImageContainer>
          <OfficeText>Office</OfficeText>
          <Image src={UniversalGlass}/>
        </ImageContainer>
      </Left>

      <Right>
        <Text>
        Creating exceptional workspace environments necessitates an equally exceptional supply partner. At Technoglass, our vast experience in decorative glass offers our clients a plethora of opportunities to craft truly remarkable interior spaces. From top-tier, colored glass products to specialized laminates that incorporate decorative fabrics, Technoglass has the capability to bring any project to vibrant fruition.
        </Text>

        <Text>
        Our manufacturing competencies encompass state-of-the-art vertical and horizontal CNC processing, in-house laminating, and screen printing. Technoglass also offers digital printing, merging the resilience of glass with the latest high-resolution print technology to produce vivid images. These images serve as the ideal backdrop for any commercial setting.
        </Text>

      </Right>
     </MidSection>

     <Card
    Header="Reflecting our customers need."
    text="Friendly, competitive & service driven"
    button1Text="Click here"
    button2Text="Call 07065193654"
    />

    <Footer />
    </OfficeWrapper>
  )
}


const OfficeWrapper = styled.div``
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
// font-size: 14px;
// `