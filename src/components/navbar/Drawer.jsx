import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ExpandMenu from "./ExpandMenu";



const Drawer = ({ isOpen, toggleDrawer, links }) => {
  return (
    <>
      {isOpen && <Backdrop onClick={toggleDrawer} />}
      <SDrawer isOpen={isOpen}>
        <RightNav>
        
          <NavRoutes>
            {links.map((link) => {
              if (link.subLinks) {
                return <ExpandMenu link={link} key={link.id} />;
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
  );
};

export default Drawer;

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
const SDrawer = styled.div`
  z-index: 150;
  position: absolute;
  top: 0;
  min-height: 100vh;
  width: 75%;
  background-color: #00221bc8;
  transition: 0.3s ease;

  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;
const NavRoutes = styled.div` 
color: #ffffff;

`;
const NavRoute = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  padding: 0.5rem;
`;
