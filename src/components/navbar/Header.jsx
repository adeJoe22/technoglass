import React from 'react'
import  styled  from 'styled-components';
import NavLinks from './NavLinks';


const links = [
  { id: 1, label: 'HOME', path: '/' },
  { id: 2, label: 'ABOUT', path: '/about' },
  { id: 3, label: 'FACILITY', path: '/facility' },
  { id: 4, label: 'SECTORS', path: '/sectors' },  
  { id: 5, label: 'GLASS PRODUCTS', isDropdown: true, options: ['Option 1', 'Option 2', 'Option 3'] },
  { id: 6, label: 'CONTACT', path: '/contact' },
]; 


export default function Header() {
  return (
    <Nav>
        <LogoWrap>
          Technoglass
        </LogoWrap>
        <LinkWrap>
            {links.map((link)=> (
              <NavLinks key={link.id} link={link}/>
            ))}
        </LinkWrap>
    </Nav>
  )
}


const Nav = styled.div`
  
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
`

const LogoWrap = styled.div`
  
`

const LinkWrap = styled.div`
  width: 600px;
  height: 100%;
  border: 1px solid green;
  align-items: center;
  display: flex;
`