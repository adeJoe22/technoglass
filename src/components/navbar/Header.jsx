import React from 'react'
import  styled  from 'styled-components';
import logo from '../../assets/Tecnologo.png'
import SubLinks from './SubLinks';
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


export default function Header({toggleDrawer, links}) {

  const activeNav = ({isActive}) => {
    return{
      color: isActive ? 'green' : 'black',
      textDecoration: isActive ? "none" : "none"
    }
}
  return (
    <Nav>
      <Drawer onClick={toggleDrawer}>        
        <FaBars/>
      </Drawer>
        <LogoWrap>
          <img src={logo} alt={logo}/>
        </LogoWrap>
        <LinkWrap>
            {links.map((link)=> {

              if(link.sublinks){
                return <SubLinks link={link} key={link.id}/>
              }
              return <NavLink key={link.id} to={link.path} style={activeNav}>
                <Label>{link.label}</Label>
              </NavLink>
            }             
          )}
        </LinkWrap>
    </Nav>
  )
}


const Nav = styled.div`  
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

const LinkWrap = styled.div`
  height: 100%;
  width: 620px;
  display: flex;
  align-items: center;
  /* background-color: red; */
  @media (max-width: 768px) {
    display: none;
  }
`

const Label = styled.div`
  font-size: 18px;
  font-weight: 500;
 margin-left: 15px;
`
const Drawer = styled.div`
font-size: 25px;
@media (min-width: 768px) {
    display: none;
  }
`