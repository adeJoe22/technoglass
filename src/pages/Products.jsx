import React from 'react'
import {styled} from 'styled-components'
import InnerHero from '../components/InnerHero'
import Card from '../components/Card'
import Factory from '../assets/factoryPlant.jpg'
import Footer from '../components/Footer'

export default function Products() {
  return (
    <ProductWrapper>
        <InnerHero
     backgroundImage={Factory}
     text="Products"  
     />

    <MidSection>
        <Text>
        Techno Glass have working partnerships with all the major flat glass manufacturers and therefore can offer products from all raw material types including:
        </Text>

        <Text>
         
        </Text>

        <UnorderedList>
          <OrderedList>Clear Float 1.6mm – 19mm</OrderedList>
          <OrderedList>Low Iron 8-12mm</OrderedList>
          <OrderedList>Tinted Glass bronze, dark grey, crystal blue, lake blue, blue, euro grey, green</OrderedList>
          <OrderedList>Reflective glass - bronze, grey, dark grey, blue, euro grey, lake blue</OrderedList>
          <OrderedList>Mirror 5-12mm</OrderedList>
          <OrderedList>Toughened glass</OrderedList>
          <OrderedList>Laminated glass - produced according to customer specs</OrderedList>
          <OrderedList>Double Glazing - produced according to customer specs</OrderedList>
        </UnorderedList>
    </MidSection>

  <Card
    Header="Reflecting our customers need."
    text="Friendly, competitive & service driven"
    button1Text="Click here"
    button2Text="Click me"
  />


        <Footer />
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div``
// const MidSection = styled.div`
//   padding: 50px 70px;
// `
const MidSection = styled.div`
  width: 85%;
   margin: 0 auto;
   padding: 40px 0;
`
const Text = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
`
const UnorderedList = styled.ul`
padding-left: 18px;
`
const OrderedList = styled.li`

`

