import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatar = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatar.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="update-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        ref={avatar}
        id="avatar-link"
        type="url"
        name="avatar"
        className="popup__input popup__input_type_avatar-link"
        placeholder="Ссылка на аватар"
        required
      />
      <span className="avatar-link-error popup__span popup__form-error"></span>
    </PopupWithForm>
  );
}
