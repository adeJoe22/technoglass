import React from "react";
import { styled } from "styled-components";
import InnerHero from "../components/InnerHero";
// import Background from "../assets/factoryPlant.jpg";
import Form from "../components/Form";
import Map from "../components/Map";
import { BiSolidPhone } from "react-icons/bi";
import { BiMessageRounded } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../components/Footer";

export default function Contact() {
  const Image = "https://i.ibb.co/D1CfX85/IMG-1879-2.jpg";
  return (
    <ContactWrapper>
      <InnerHero backgroundImage={Image} text='Contact' />

      <SectionTwo>
        <FormContainer>
          <Form />
        </FormContainer>

        <MapContainer>
          <Map />

          <MapText>
            <PhoneHead>Contact Us</PhoneHead>
            <Contain>
              <Icon>
                <Phone size={20} />
              </Icon>
              <Text type='tel'>+ 234-703 274 9126</Text>
            </Contain>

            <Contain>
              <Icon>
                <Phone size={20} />
              </Icon>
              <Text type='tel'>+ 234-810 274 9230</Text>
            </Contain>

            <Contain>
              <Icon>
                <Message size={20} />
              </Icon>
              <Text type='text'>
                <a href='info@technoglassng.com' target='blank'>
                  info@technoglassng.com
                </a>
              </Text>
            </Contain>

            <Contain>
              <Icon>
                <Address size={20} />
              </Icon>
              <Text type='address'>
                Plot C62, Crystal Glass Close, Amowo Odofin Industrial Estate,
                Off Oshodi Apapa Expressway, Lagos, Nigeria.
              </Text>
            </Contain>
          </MapText>
        </MapContainer>
      </SectionTwo>

      <Footer />
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e1e6e9;
`;
const SectionTwo = styled.div`
  display: flex;
  width: 93%;
  margin: auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
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
`;
const MapContainer = styled.div`
  flex: 1;
  padding: 80px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MapText = styled.div`
  display: flex;
  flex-direction: column;
`;
const Contain = styled.div`
  display: flex;
  gap: 10px;
  margin: 7px 0;
`;
const Text = styled.p`
  line-height: 1.8;
`;

const Phone = styled(BiSolidPhone)`
  color: #00221b;
`;
const Message = styled(BiMessageRounded)`
  color: #00221b;
`;
const Address = styled(FaMapMarkerAlt)`
  color: #00221b;
`;
const Icon = styled.div``;
const PhoneHead = styled.h3`
  margin: 20px 0;
`;
