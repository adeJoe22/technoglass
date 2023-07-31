import React from 'react'
import {styled} from 'styled-components'
import InnerHero from '../../components/InnerHero'
import Card from '../../components/Card'
import FacilityGlass from '../../assets/glass-city.jpg'
import Footer from '../../components/Footer'

export default function Washing() {
  return (
    <WashingWrapper>
         <InnerHero
          backgroundImage={FacilityGlass}
          text="Washing"  
     />

     <MidSection>
      <Text>
      Our team of dedicated staff members, operating in a working area of 3500m2, is committed
      to deliver high-performance products in every aspect of our business.
      Technoglass is the symbol of courage and independence. TGI continues to be first with
      significant advances translating into high-value-added materials that help create uniquely
      better products in every application.
      </Text>
      <Text>
      Driven by a commitment to innovation and excellence, we have made significant investments in
      state-of-the-art machinery, including a hi-tech furnace, double glazing line, laminating glass
      production line, and edging machines. Our extensive capabilities also include owning the largest
      toughening furnace in West Africa, enabling us to produce toughened glass in sizes up to
      2440mm x 3600mm.
      </Text>
      <Text>
      Our success is attributed to our highly skilled personnel who bring their expertise and passion
      to every project. By fostering close partnerships and synergies with top foreign companies, we
      have positioned ourselves as a trusted partner for notable government and private
      organizations in Nigeria.
      </Text>
     </MidSection>

     <Card
    Header="Reflecting our customers need."
    text="Friendly, competitive & service driven"
    button1Text="Give us a call"
    button2Text="Send us a mail"
    />

    <Footer />
    </WashingWrapper>
  )
}


const WashingWrapper = styled.div``
const MidSection = styled.div`
  width: 85%;
   margin: 0 auto;
   padding: 40px 0;
`
// const MidSection = styled.div`
//   padding: 50px 70px;
// `
const Text = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
`