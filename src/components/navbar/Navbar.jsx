import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
import logo from '../../assets/Tecnologo.png'


const Navbar = ({ toggleDrawer, links }) => {
  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
          <FaBars />
        </DrawerButton>
        <SNavbarBrand>
          <img src={logo} alt={logo}/>
        </SNavbarBrand>
        <RightNav>
          <NavRoutes>
            {links.map((link) => {
              if (link.subLinks) {
                return <Menu link={link} key={link.id} />;
              }
              return (
                <NavRoute to={link.path} key={link.id}>
                  {link.label}
                </NavRoute>
              );
            })}
          </NavRoutes>
        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar;

const DrawerButton = styled.button`
  all: unset;
  font-size: 1.5rem;
  display: grid;
  @media (min-width: 768px) {
    display: none;
  }
`;

const SNavbar = styled.nav`
`;
const NavContainer = styled.div`
  padding: 1rem;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000;
  font-weight: 500;
  font-size: 17px;
`;
const SNavbarBrand = styled.div`
  width: 220px;
  height: 80px;
  display: flex;
  margin-left: 50px;
  align-items: center;
  justify-content: center;
  img{
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const RightNav = styled.div`
  display: flex;
  margin-right: 50px;
 
`;
const NavRoutes = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 1rem;
  align-items: center;

`;
const NavRoute = styled(Link)`
  text-decoration: none;

  padding: 0.5rem;
  transition: 0.5s ease;

  &:hover {
    transition: 0.5s ease;
    color: black;
    /* background-color: white;
    box-shadow: 0px 0px 10px white; */
  }
`;


