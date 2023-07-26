import React from 'react'
import {styled} from 'styled-components'
import InnerHero from '../components/InnerHero'
import Background from '../assets/background.jpg'
import Form from '../components/Form'

export default function Contact() {
  return (
    <ContactWrapper>
         <InnerHero
     backgroundImage={Background}
     text="Contact"  
     />

      <SectionTwo>
        <FormContainer>
          <Form />
        </FormContainer>
        <MapContainer>

        </MapContainer>
        </SectionTwo>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #E1E6E9;
`
const SectionTwo = styled.div`
  display: flex;
 
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const FormContainer = styled.div`
flex: 1;
padding-top: 20px;
padding-right: 40px;
padding-bottom: 20px;
padding-left: 80px;
flex-direction: column;
`
const MapContainer = styled.div`
flex: 1;
padding: 20px;
background-color: yellow;
`