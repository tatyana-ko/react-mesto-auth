import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  

  return (
    <main>
      <div>
        <h2>Регистрация</h2>
        <form action="">
          <input type="email" />
          <input type="password" />
          <button type="submit">Зарегистрироваться</button>
        </form>
        <p>Уже Зарегистрированы? 
          <Link to="/sign-in">Войти</Link>
        </p>
      </div>
    </main>
  )
}