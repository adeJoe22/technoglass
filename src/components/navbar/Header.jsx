import React from 'react'
import  styled  from 'styled-components';
import NavLinks from './NavLinks';


const links = [
  { id: 1, label: 'HOME', path: '/' },
  { id: 2, label: 'ABOUT', path: '/about' },
  { id: 3, label: 'FACILITY', path: '/facility' },
  { id: 4, label: 'SECTORS', path: '/sectors' },  
  { id: 5, label: 'GLASS PRODUCTS', path:'/products' },
  { id: 6, label: 'CONTACT', path: '/contact' },
]; 


export default function Header() {
  return (
    <Nav>
        <LogoWrap>
          Technoglass
        </LogoWrap>
        <LinkWrap>
            {links.map(({id, label, path })=> (
              <NavLinks key={id} path={path} label={label}/>
            ))}
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
  border: 1px solid red;
  padding: 0px 50px;
`

const LogoWrap = styled.div`
  
`

const LinkWrap = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
`