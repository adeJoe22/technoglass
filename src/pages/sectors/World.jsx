import React from 'react'
import {styled} from 'styled-components'
import InnerHero from '../../components/InnerHero'
import Card from '../../components/Card'
import Background from '../../assets/background.jpg'
import Footer from '../../components/Footer'
import UniversalGlass from '../../assets/glass-office.jpeg'

export default function World() {
  return (
    <WorldWrapper>
         <InnerHero
          backgroundImage={Background}
          text="World"  
     />

     <MidSection>
      <Left>
        <ImageContainer>
          <OfficeText>World</OfficeText>
          <Image src={UniversalGlass}/>
        </ImageContainer>
      </Left>

      <Right>
        <Text>
        Technoglass is committed to transforming Africa's architectural landscape by delivering innovative solutions one project at a time. 
        </Text>

        <Text>
        The company's products are marked with the NIS Mark of Quality and conform to local and international standards, making it a trusted partner for significant entities not only in Nigeria but also in the West African Sub-region.
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