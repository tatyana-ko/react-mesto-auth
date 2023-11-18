import React from "react";

export default function PopupWithForm({
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  children,
  onSubmit
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__container-title">{title}</h2>
        <form
          onSubmit={onSubmit}
          className={`popup__form popup__form_${name}`}
          name={`${name}_form`}
        >
          {children}
          <button className="popup__button-save button-hover" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
