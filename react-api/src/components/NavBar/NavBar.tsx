import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = (): JSX.Element => {
  return (
    <nav className="navBar">
      <div className="links">
        <NavLink exact data-testid="link-home" activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink exact data-testid="link-about" activeClassName="active" to="/about">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
