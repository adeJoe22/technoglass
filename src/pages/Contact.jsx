import React from 'react'
import {styled} from 'styled-components'
import InnerHero from '../components/InnerHero'
import Background from '../assets/cityy.jpg'
import Form from '../components/Form'
import Map from '../components/Map'
import {BiSolidPhone} from 'react-icons/bi'
import {BiMessageRounded} from 'react-icons/bi'
import {FaMapMarkerAlt} from 'react-icons/fa'
import Footer from '../components/Footer'



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
            <Map />

            <MapText>
            <PhoneHead>
              Contact Us
            </PhoneHead>
          <Contain>
            <Icon>
              <Phone size={20}/>
            </Icon>
            <Text type="tel">
            + 234-703 274 9126
            </Text>
          </Contain>

          <Contain>
            <Icon>
              <Phone size={20}/>
            </Icon>
            <Text type="tel">
            + 234-810 274 9230
            </Text>
          </Contain>

          <Contain>
            <Icon>
              <Message size={20}/>
            </Icon>
            <Text type="text">
            <a href='info@technoglassng.com' target='blank'>info@technoglassng.com</a>
            </Text>
          </Contain>

          <Contain>
            <Icon>
              <Address size={20}/>
            </Icon>
            <Text type="address">
            Plot C62, Crystal Glass Close, Amowo Odofin Industrial Estate, Off Oshodi Apapa Expressway, Festac Town.
            </Text>
          </Contain>
        </MapText>
        </MapContainer>

        
        </SectionTwo>


        <Footer />
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
// const FormContainer = styled.div`
// flex: 1;
// padding-top: 20px;
// padding-right: 40px;
// padding-bottom: 20px;
// padding-left: 80px;
// flex-direction: column;
// `
const FormContainer = styled.div`
flex: 1;
padding: 80px 30px;
display: flex;
flex-direction: column;

`
const MapContainer = styled.div`
flex: 1;
padding: 80px 30px;
display: flex;
flex-direction: column;
align-items: flex-start;
`

const MapText = styled.div`
  display: flex;
  flex-direction: column;
`
const Contain = styled.div`
display: flex;
gap: 10px;
margin: 7px 0
`
const Text = styled.p`
  line-height: 1;
`

const Phone = styled(BiSolidPhone)`
color: green;
`
const Message = styled(BiMessageRounded)`
color: green;
`
const Address = styled(FaMapMarkerAlt)`
color: green;
`
const Icon = styled.div``
const PhoneHead = styled.h3`
  margin: 20px 0;
`
