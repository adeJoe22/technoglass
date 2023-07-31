import React, {useState} from 'react'
import { styled } from 'styled-components';
import NewDropdownMenu from './NewDropDownMenu';

export default function NewNavLinks({link}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    if (link.isDropdown) {
      setDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (link.isDropdown) {
      setDropdownOpen(false);
    }
  };

  const renderLink = () => {
    if (link.isDropdown) {
      return (
        <DropdownContainer
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Button>{link.label}</Button>
          {isDropdownOpen && <NewDropdownMenu options={link.options} />}
        </DropdownContainer>
      );
    } else {
      return (
        <Link href={link.path}>
          {link.label}
        </Link>
      );
    }
  };

  return renderLink();
}


const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Button = styled.button`
  background-color: transparent;
  color: #333;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
`;

const Link = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 16px;
  padding: 10px;
`;