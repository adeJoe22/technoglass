import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom"
import Dropdown from './Dropdown';


export default function Drawer({ isOpen, toggleDrawer, links }) {
  return (
    <>
     {isOpen && <Backdrop onClick={toggleDrawer} />}
      <SDrawer isOpen={isOpen}>
        <RightNav>
          <SNavbarBrand>LOGO</SNavbarBrand>
          <NavRoutes>
            {links.map((link) => {
              if (link.sublinks) {
                return <Dropdown link={link}  key={link.id} />;
              }
              return (
                <NavRoute
                  onClick={toggleDrawer}
                  to={link.path}
                  key={link.id}
                >
                  {link.label}
                </NavRoute>
              );
            })}
          </NavRoutes>
        </RightNav>
      </SDrawer>
    </>
  )
}

const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;

  background-color: transparent;
`;

const SNavbarBrand = styled.p`
  font-size: 14px;
`;
const SDrawer = styled.div`
  z-index: 150;
  position: absolute;
  top: 0;
  height: 100%;
  width: 70%;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(0, 0, 0, 0.3);
  transition: 0.3s ease;

  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  /* background-color: red; */
`;
const NavRoutes = styled.div``;
const NavRoute = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #ffffff;
  font-size: 14px;
  padding: 5px;
`;


