import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

export default function SubLinks({link , toggle}) {

  const activeNav = ({isActive}) => {
    return{
      color: isActive ? 'green' : 'black',
      textDecoration: isActive ? "none" : "none"
    }
}
  return (
    <Wrapper>
      <RouteName>
        {link.label}
      </RouteName>
      <SubRoutes>
        {
          link.sublinks.map((sublink)=> (
            <NavLink to={sublink.path} key={sublink.id} style={activeNav}>
              <Label>{sublink.label}</Label>
            </NavLink>      
          ))
        }
      </SubRoutes>
    </Wrapper>
  )
}


const SubRoutes = styled.div`
 position: absolute;
  min-width: 190px;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.02);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(0, 0, 0, 0.3);
  /* padding: 10px 25px; */
  top: 70px;
  left: -1rem;
  visibility: hidden;
  opacity: 0;
  border-radius: 5px;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
  
`

const Wrapper = styled.div`
   position: relative;
  display: inline-block;

  &:hover ${SubRoutes} {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
`

const RouteName = styled.div`
 /* padding: 1rem; */
 margin-right: 15px;
 font-size: 18px;
  font-weight: 500;
  &:hover {
    transition: 0.5s ease;
    color: #00221B;
    box-shadow: 0px 0px 10px white;
  }
`

const Label = styled.div`
  text-decoration: none;
  color: black;
  padding: 10px;
  transition: 0.3s ease-in;
  &:hover {
    transition: 0.3s ease-in;
    color: #ffffff;
    background-color: #00221b;
  }
`