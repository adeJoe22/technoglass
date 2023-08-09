import React from 'react'
import {styled} from 'styled-components'
import InnerHero from '../../components/InnerHero'
import Card from '../../components/Card'
import Background from '../../assets/background.jpg'
import Footer from '../../components/Footer'
import UniversalGlass from '../../assets/glass-office.jpeg'

export default function Automotive() {
  return (
    <WorldWrapper>
         <InnerHero
          backgroundImage={Background}
          text="Automotive Glasses"  
     />

     <MidSection>
      <Left>
        <ImageContainer>
          <OfficeText>Automotive Glasses</OfficeText>
          <Image src={UniversalGlass}/>
        </ImageContainer>
      </Left>

      <Right>
        <Text>
        Technoglass offers a comprehensive range of automotive glass products that meet safety, performance, and aesthetic standards.  
        </Text>

        <Text>
        These include windshields, side and rear windows, sunroofs, and specialty glass for advanced applications. Their products stand out for their uncompromising safety, enhanced driving comfort, protection from harmful UV rays, and crystal-clear visibility
        </Text>

      </Right>
     </MidSection>

     <Card
    Header="Reflecting our customers need."
    text="Friendly, competitive & service driven"
     button1Text="Give us a call"
    button2Text="Send us a mail"
    />

    <Footer />
    </WorldWrapper>
  )
}


const WorldWrapper = styled.div``
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