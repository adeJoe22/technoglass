import React from 'react'
import {styled} from 'styled-components'
import InnerHero from '../components/InnerHero'
import Card from '../components/Card'
import Background from '../assets/background.jpg'

export default function Products() {
  return (
    <ProductWrapper>
        <InnerHero
     backgroundImage={Background}
     text="Products"  
     />

    <MidSection>
        <Text>
        In addition to offering the full range of Pilkington MirroView™ Digital Display glass we are now an approved Pilkington Mirropane™ Chrome Toughenable Mirror processor
        </Text>

        <Text>
        MiGlass have working partnerships with all the major flat glass manufacturers and therefore can offer products from all raw material types including:
        </Text>

        <UnorderedList>
          <OrderedList>Clear Float 1.6mm – 19mm</OrderedList>
          <OrderedList>Low Iron 4mm – 19mm</OrderedList>
          <OrderedList>Body tints Green/Grey/Bronze 3mm – 10mm</OrderedList>
          <OrderedList>Clear Mirror 3mm – 6mm</OrderedList>
          <OrderedList>Bronze, Grey or Antique Mirror 3mm – 6mm</OrderedList>
          <OrderedList>Anti-Reflective Coatings</OrderedList>
          <OrderedList>Di-Electric Mirror</OrderedList>
          <OrderedList>Painted Glass All Colours 4mm – 6mm</OrderedList>
          <OrderedList>Toughened Painted Glass All Colours 4mm – 10mm</OrderedList>
          <OrderedList>Laminated Including Acoustic, Decorative and Coloured Interlayers</OrderedList>
          <OrderedList>Patterned Glass</OrderedList>
          <OrderedList>Satinised Glass Including Non-Slip</OrderedList>
        </UnorderedList>
    </MidSection>

  <Card
    Header="Reflecting our customers need."
    text="Friendly, competitive & service driven"
    button1Text="Click here"
    button2Text="Click me"
  />


        
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div``
const MidSection = styled.div`
  padding: 50px 70px;
`
const Text = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
`
const UnorderedList = styled.ul`
padding-left: 15px;
`
const OrderedList = styled.li`

`

