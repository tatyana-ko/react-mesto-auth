import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Подписка на контекст
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]); 

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  } 

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="profile-name"
        type="text"
        name="name"
        className="popup__input popup__input_type_name"
        placeholder="Имя"
        required
        minLength="2"
        maxLength="40"
        onChange={handleNameChange}
        value={name || ''}
      />
      <span className="profile-name-error popup__span popup__form-error"></span>
      <input
        id="profile-about"
        type="text"
        name="about"
        className="popup__input popup__input_type_about"
        placeholder="Вид деятельности"
        required
        minLength="2"
        maxLength="200"
        onChange={handleDescriptionChange}
        value={description || ''}
      />
      <span className="profile-about-error popup__span popup__form-error"></span>
    </PopupWithForm>
  );
}
