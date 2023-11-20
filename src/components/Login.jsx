import React from "react";

export default function Login() {
  return (
    <main className="authorization">
      <div className="authorization__container">
        <h2 className="authorization__title">Вход</h2>
        <form action="" className="authorization__form">
          <input
            required
            type="email"
            placeholder="Email"
            minLength="2"
            maxLength="40"
            className="authorization__input"
          />
          <input
            required
            type="password"
            placeholder="Пароль"
            minLength="6"
            maxLength="40"
            className="authorization__input"
          />
          <button type="submit" className="authorization__button">
            Войти
          </button>
        </form>
      </div>
    </main>
  );
}
