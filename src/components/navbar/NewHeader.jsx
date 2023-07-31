import React from 'react'
import { styled } from 'styled-components';
import NewNavLinks from './NewNavLinks';
import { links } from './links';
import logo from '../../assets/Tecnologo.png'
import { FaBars } from "react-icons/fa";





export default function NewHeader() {
  return (
    <Container>
       <LogoWrap>
          <img src={logo} alt={logo}/>
        </LogoWrap>
       <Nav>
      {links.map((link) => (
        <NewNavLinks key={link.id} link={link} />
      ))}
    </Nav>

    <Hamburger>
      <FaBars/>
    </Hamburger>
    </Container>
  )
}


const Nav = styled.div`
   height: 100%;
  width: 630px;
  display: flex;
  align-items: center;
  /* background-color: red; */
  @media (max-width: 768px) {
    display: none;
  }
`

const Container = styled.div`  
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
  @media (max-width: 768px) {
    padding: 0px 25px;
    height: 65px;
  }
`

const LogoWrap = styled.div`
  width: 220px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
width: 100%;
height: 100%;
object-fit: contain;
  }
`

const Hamburger = styled.div`
  font-size: 25px;
@media (min-width: 768px) {
    display: none;
  }
`