import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #282c34;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${props => (props.open ? 'flex' : 'none')};
    animation: ${props => (props.open ? slideDown : 'none')} 0.5s ease-in-out;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Nav>
      <h1>My Portfolio</h1>
      <MenuIcon onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavMenu open={menuOpen}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Header;
