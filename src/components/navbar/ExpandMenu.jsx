import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const ExpandMenu = ({ link }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <SMenu>
      <MenuButton onClick={toggleMenu}>
        {link.label} {isMenuOpen ? <FaAngleDown /> : <FaAngleRight />}
      </MenuButton>
      <SubRoutesContainer isOpen={isMenuOpen}>
        {link.subLinks.map((subLink) => (
          <SubRoute to={subLink.path} key={subLink.id} onClick={toggleMenu}>
            {subLink.label}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  );
};

export default ExpandMenu;
const SubRoutesContainer = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 1rem;
`;
const SMenu = styled.div``;

const MenuButton = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  padding: 0.5rem;
  font-size: 16px;
  font-weight: 500;
`;
