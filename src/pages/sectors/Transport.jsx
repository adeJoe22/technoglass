import React from 'react'
import {styled} from 'styled-components'
import InnerHero from '../../components/InnerHero'
import Card from '../../components/Card'
import Background from '../../assets/background.jpg'
import Footer from '../../components/Footer'
import UniversalGlass from '../../assets/glass-office.jpeg'

export default function Transport() {
  return (
    <TransportWrapper>
         <InnerHero
          backgroundImage={Background}
          text="Transport"  
     />

     <MidSection>
      <Left>
        <ImageContainer>
          <OfficeText>Transport</OfficeText>
          <Image src={UniversalGlass}/>
        </ImageContainer>
      </Left>

      <Right>
        <Text>
        As the leading authority in advanced glass processing in Nigeria and the West African sub-region, Technoglass is committed to delivering transportation glass products that meet and exceed both local and international standards. Our products proudly bear the NIS Mark of Quality, a testament to our adherence to stringent quality measures.
        </Text>

        <Text>
        Technoglass is equipped to provide glass solutions for the transportation sector that comply with many globally recognized quality and safety standards, including ECE Regulation 43. Our experience has underscored the importance of innovation, quality, and value to suppliers of construction and agricultural machinery.
        </Text>

        <Text>
        Our investment in state-of-the-art technology, coupled with our unwavering commitment to effective quality management, enables us to offer a diverse range of glass solutions for the transportation industry. At Technoglass, we are dedicated to driving the future of transportation with our high-quality, durable, and safe glass products.
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
    </TransportWrapper>
  )
}


const TransportWrapper = styled.div``
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