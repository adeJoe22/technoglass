import React from 'react'
import {styled} from 'styled-components'
import InnerHero from '../components/InnerHero'
import Card from '../components/Card'
import FacilityGlass from '../assets/glass-city.jpg'
import Footer from '../components/Footer'

export default function Facility() {
  return (
    <FacilityWrapper>
         <InnerHero
          backgroundImage={FacilityGlass}
          text="Facility"  
     />

     <MidSection>
      <Text>
      With continual investment MiGlass have created an unrivalled glass processing resource supplying glass products throughout the UK & central Europe.
      </Text>
      <Text>
      Our highly skilled & specialist team consists of over 75 glass processing engineers all working within the ISO9001-2008 quality standard. In addition to this MI Glass are proud to have achieved BSI Kitemark™ accreditation for our toughened safety glass.
      </Text>
      <Text>
      Our main factory in Downing Street, Birmingham offers 55,000 sq ft of dedicated manufacturing space featuring state of the art machinery including CNC processing, In-House Toughening, Water Jet Cutting and Printing.
      </Text>
      <Text>
      Our recently opened second factory in Booth Street, Birmingham offer a further 25,000 sq ft of dedicated cutting, laminating and warehousing space to support the further expansion of the business.
      </Text>
      <Text>
      Our location on the outskirts of Birmingham offers easy access to all the major motorways and transport routes enables us to offer a Nationwide delivery service.
      </Text>
     </MidSection>

     <Card
    Header="Reflecting our customers need."
    text="Friendly, competitive & service driven"
    button1Text="Click here"
    button2Text="Click me"
    />

    <Footer />
    </FacilityWrapper>
  )
}


const FacilityWrapper = styled.div``
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