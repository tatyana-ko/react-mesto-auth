import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register({handleRegister}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleRegister(email, password);
  }

  return (
    <main className="authorization">
      <div className="authorization__container">
        <h2 className="authorization__title">Регистрация</h2>
        <form onSubmit={handleSubmit} className="authorization__form">
          <input
            required
            type="email"
            placeholder="Email"
            minLength="2"
            maxLength="40"
            className="authorization__input"
            value={email}
            onChange={(event) => {setEmail(event.target.value)}}
          />
          <input
            required
            type="password"
            placeholder="Пароль"
            minLength="6"
            maxLength="40"
            className="authorization__input"
            value={password}
            onChange={(event) => {setPassword(event.target.value)}}
          />
          <button type="submit" className="authorization__button">
            Зарегистрироваться
          </button>
        </form>
        <p className="authorization__subtitle">
          Уже зарегистрированы?
          <Link to="/sign-in" className="authorization__link">
            {" "}
            Войти
          </Link>
        </p>
      </div>
    </main>
  );
}
