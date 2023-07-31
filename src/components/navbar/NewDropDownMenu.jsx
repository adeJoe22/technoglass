// DropdownMenu.js
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const NewDropdownMenu = ({ options }) => {
  return (
    <DropdownContent>
      {options.map((option) => (
        <NavLink key={option.id} to={option.path}>
          <DropdownLink>
             {option.label}
          </DropdownLink>
         
        </NavLink>
      ))}
    </DropdownContent>
  );
};

export default NewDropdownMenu;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  left: -1rem;
  color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
  min-width: 220px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 0.3);
  :hover & {
    display: flex;
    min-width: 220px;
    min-height: 100px;
    flex-direction: column;   
  }
`;

const DropdownLink = styled.a`
  color: #ffffff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #00221b;
  }
`;
