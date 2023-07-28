import React from 'react'
import styled from 'styled-components'

import {NavLink} from 'react-router-dom'

export default function NavLinks({path, label}) {


  return(
    <>
    <NavLinkWrap>
      <NavLink to={path} >
        <Label>{label}</Label>
    </NavLink>
    </NavLinkWrap>

    </>
  ) 
}


const NavLinkWrap = styled.div`
  padding: 10px ;
  position: relative;
`

const Label = styled.div`
  font-size: 18px;
  font-weight: 500;
 
`