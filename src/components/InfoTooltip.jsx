//компонент модального окна,который информирует пользователя об успешной (или не очень) регистрации
import React from "react";

export default function InfoTooltip({ isOpen, onClose, image, text }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          onClick={onClose}
        ></button>
        <img src={image} alt="" className="popup__tooltip-image"/>
        <p className="popup__tooltip-text">{text}</p>
      </div>
    </div>
  );
}
