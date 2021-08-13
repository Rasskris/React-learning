import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = (): JSX.Element => {
  return (
    <nav className="navBar">
      <div className="links">
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="active" to="/about">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
