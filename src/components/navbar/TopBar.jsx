import React from 'react'
import { styled } from 'styled-components'
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaPhone,
} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai'
export default function TopBar() {
  const emailAddress = 'info@technoglassng.com';

  const handleButtonEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <Container>
      <InfoWrap>
        <PhoneNo>
          <FaPhone/>
          <div>+234-703 274 9126</div>          
        </PhoneNo>
        <Address>
        <div>Plot C62, Crystal Glass Close, Amowo Odofin Industrial Estate, Off Oshodi Apapa Expressway, Lagos, Nigeria.</div>
      </Address>
      <Email>
        <AiOutlineMail/><a onClick={handleButtonEmail}>
      <div>info@technoglassng.com</div>
      </a>
      </Email>
      </InfoWrap>
      
      <Social>
        <div><a href='' target='_blank'><FaFacebookSquare/></a></div>
        <div><a href='https://instagram.com/technoglass.ng?igshid=MzRlODBiNWFlZA==' target='_blank'><FaInstagram/></a></div>
        <div><a href="linkedin.com" target='_blank'><FaLinkedin/></a></div>
        <div><a href="https://twitter.com/TechnoglassNG?t=s1kZLlfdfReSwINckbyrgA&s=09" target='_blank'><FaTwitterSquare/></a></div>

      </Social>
    </Container>
  )
}


const Container = styled.div`
  
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00221B;
  @media screen and (max-width: 768px){
    flex-direction: column;
    height: 80px;
    justify-content: center;
    
  }
`

const InfoWrap = styled.div`
display: flex;
align-items: center;
color: #fff;
font-size: 12px;
margin-left: 70px;
@media screen and (max-width: 768px){
    flex-direction: column;
    margin-left: 0px;
    height: 40px;
    justify-content: center;

  }
`
const PhoneNo = styled.div`
display: flex;
align-items: center;
justify-content: center;
svg{
  margin-right: 5px;
  font-size: 20px;
}
@media screen and (max-width: 768px){
    margin-left: 0px;
    margin: 0px;
  svg{  
  font-size: 15px;
}
}
`
const Address = styled.div`
  margin-left:  50px;
  width: 330px;
  display: flex;
align-items: center;
justify-content: center;
svg{
  margin-right: 5px;
  font-size: 20px;
}
  @media screen and (max-width: 768px){
    display: none;
  }
`
const Email = styled.div`
margin: 20px;
margin-left:  50px;
display: flex;
align-items: center;
justify-content: center;
svg{
  margin-right: 5px;
  font-size: 20px;
}
@media screen and (max-width: 768px){
    margin-left: 0px;
    margin: 5px;
  svg{  
  font-size: 15px;
}
  }
`
const Social = styled.div`
margin-right: 70px;
display: flex;
align-items: center;
justify-content: space-between;
width: 120px;
div{
  color: #ffffff;
  font-size: 20px;
}
@media screen and (max-width: 768px){
    margin-right: 0px;
    font-size: 15px;
  }
`
