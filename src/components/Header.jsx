import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/logot.svg";

export default function Header({email, handleSignout}) {
  const location = useLocation();

  return (
    <header className="header">
      <img src={Logo} alt="Логотип сайта" className="header__logo" />

      <div className="navigation">
        {location.pathname === "/sign-in" && (
          <Link to="/sign-up" className="navigation__link">
            Регистрация
          </Link>
        )}
        {location.pathname === "/sign-up" && (
          <Link to="/sign-in" className="navigation__link">
            Войти
          </Link>
        )}
        {location.pathname === "/" && (
          <div className="navigation__menu">
            <p className="navigation__email">{email}</p>
            <Link to="/sign-in" className="navigation__link" onClick={handleSignout}>Выйти</Link>
          </div>
        )}
      </div>
    </header>
  );
}
