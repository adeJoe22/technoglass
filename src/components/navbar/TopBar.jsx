import React from 'react'
import { styled } from 'styled-components'

export default function TopBar() {
  return (
    <Container>
      <InfoWrap>
        <PhoneNo>
          +234-703 274 9126
        </PhoneNo>
        <Address>
        Plot C62, Crystal Glass Close, Amowo Odofin Industrial Estate, Off Oshodi Apapa Expressway, Festac Town.
      </Address>
      <Email>
      info@technoglassng.com
      </Email>
      </InfoWrap>
      
      <Social>
Social
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

`
const Address = styled.div`
  margin-left:  50px;
  width: 330px;
  @media screen and (max-width: 768px){
    display: none;
  }
`
const Email = styled.div`
margin: 20px;
margin-left:  50px;
@media screen and (max-width: 768px){
    margin-left: 0px;
    margin: 5px;
  }
`
const Social = styled.div`
margin-right: 70px;
@media screen and (max-width: 768px){
    margin-right: 0px;
    
  }
`
