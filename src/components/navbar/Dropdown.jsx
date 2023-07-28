import React, {useState} from 'react'
import { styled } from 'styled-components';
import {FaAngleRight, FaAngleDown } from "react-icons/fa"
import { Link} from 'react-router-dom';

export default function Dropdown({link}) {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropDown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <SMenu>
      <MenuButton onClick={toggleDropDown}>
        {link.label} {isDropdownOpen ? <FaAngleDown /> : <FaAngleRight />}
      </MenuButton>
      <SubRoutesContainer isOpen={isDropdownOpen}>
        {link.sublinks.map((sublink) => (
          <SubRoute to={sublink.path} key={sublink.id}>
            {sublink.label}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  )
}

const SubRoutesContainer = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 1rem;
  transition: 0.3s ease;

`;
const SMenu = styled.div``;

const MenuButton = styled.div`
  font-size: 14px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 4px 7px;
  font-size: 14px;
`;
