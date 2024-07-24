import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  Nav,
  NavLink,
  NavMenu,
  MenuIcon
} from '../StyledComponents'; // Adjust the path if necessary


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Nav>
      <h1>Web Portfolio</h1>
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
