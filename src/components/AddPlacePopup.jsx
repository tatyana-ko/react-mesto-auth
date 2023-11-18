import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const cardName = useRef();
  const cardLink = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: cardName.current.value,
      link: cardLink.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="add-card"
      title="Новое место"
      buttonText="Создать"
    >
      <input
        id="card-name"
        type="text"
        name="name"
        className="popup__input popup__input_type_add-card-name"
        placeholder="Название"
        required
        minLength="2"
        maxLength="30"
        ref={cardName}
      />
      <span className="card-name-error popup__span popup__form-error"></span>
      <input
        id="card-link"
        type="url"
        name="link"
        className="popup__input popup__input_type_add-card-link"
        placeholder="Ссылка на картинку"
        required
        ref={cardLink}
      />
      <span className="card-link-error popup__span popup__form-error"></span>
    </PopupWithForm>
  );
}
