import React from "react";

export default function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup_type_full_image ${card.link ? 'popup_opened' : ''}`}>
    <div className="popup__image-container">
      <button className="popup__button-close" type="button" onClick={onClose}></button>
      <img className="popup__full-image" src={card.link} alt={card.name} />
      <h2 className="popup__image-title">{card.name}</h2>
    </div>
  </div>
  );
}
