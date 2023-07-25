import React from 'react'
import styled from 'styled-components'

export default function DropDownMenu({options}) {
  return (
    <DropdownContent>
      {options.map((option, index) => (
        <DropdownLink key={index} href={`/${option}`}>{option}</DropdownLink>
      ))}
    </DropdownContent>
  );
}

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1; 
`;

const DropdownLink = styled.a`
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`;