import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Menu = ({ link }) => {
  return (
    <SMenu>
      <MenuButton>{link.label}</MenuButton>
      <SubRoutesContainer>
        {link.subLinks.map((subLink) => (
          <SubRoute to={subLink.path} key={subLink.id}>
            {subLink.label}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  );
};

export default Menu;
const SubRoutesContainer = styled.div`
  position: absolute;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  background-color: #00221b9b;
  box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  top: 62px;
  left: -1rem;
  visibility: hidden;
  opacity: 0;
  border-radius: 0.4rem;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;
const SMenu = styled.div`
  position: relative;
  display: inline-block;
z-index: 300;
  &:hover ${SubRoutesContainer} {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
`;

const MenuButton = styled.div`
  padding: 1rem;
  &:hover {
    transition: 0.5s ease;
    color: black;
  }
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: 0.3s ease-in;

  &:hover {
    transition: 0.3s ease-in;
    color: #ffffff;
    background-color: #00221B;
  }
`;
