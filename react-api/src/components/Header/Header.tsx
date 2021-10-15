import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from './logo.png';
import { NavBar } from '../NavBar';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="Logo" />
        <h1 className="header__title">Recipes for Every Day</h1>
      </Link>
      <NavBar />
    </header>
  );
};

export default Header;
