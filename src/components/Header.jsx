import React from 'react';
import Logo from '../images/logot.svg';

export default function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Логотип сайта" className="header__logo"/>
    </header>
  )
}