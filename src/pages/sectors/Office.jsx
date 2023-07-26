import React from 'react'
import {styled} from 'styled-components'
import InnerHero from '../../components/InnerHero'
import Card from '../../components/Card'
import Background from '../../assets/background.jpg'

export default function Facility() {
  return (
    <OfficeWrapper>
         <InnerHero
          backgroundImage={Background}
          text="Facility"  
     />

     <MidSection>
      <Left>
        <ImageContainer>
          <Image src={Background}/>
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
        </Text>
      </Right>
     </MidSection>

     <Card
    Header="Reflecting our customers need."
    text="Friendly, competitive & service driven"
    button1Text="Click here"
    button2Text="Click me"
    />
    </OfficeWrapper>
  )
}


const OfficeWrapper = styled.div``
const MidSection = styled.div`
  padding: 50px 70px;
`
const Text = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
`
const Left = styled.div`
 
`
const Right = styled.div`
  
`
const ImageContainer = styled.div`
  
`
const Image = styled.img`
  
`