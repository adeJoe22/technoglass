import React from 'react'
import  styled  from 'styled-components';
import NavLinks from './NavLinks';
import SubLinks from './SubLinks';
import { FaBars } from "react-icons/fa";
import { links } from './links';


export default function Header({toggleDrawer}) {
  return (
    <Nav>
      <Drawer onClick={toggleDrawer}>        
        <FaBars/>
      </Drawer>
        <LogoWrap>
          Technoglass
        </LogoWrap>
        <LinkWrap>
            {links.map((link)=> {

              if(link.sublinks){
                return <SubLinks link={link}/>
              }
              return <NavLinks key={link.id} path={link.path} label={link.label}/>
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
`

const LogoWrap = styled.div`
  
`

const LinkWrap = styled.div`
  height: 100%;
  width: 700px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`

const Drawer = styled.div`

@media (min-width: 768px) {
    display: none;
  }
`