import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__button-like ${
    isLiked && "element__button-like_active"
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <article className="element">
      {/* <button className="element__delete" type="button"></button> */}
      {isOwn && <button className='element__delete' onClick={handleDeleteClick} />}
      <img
        src={card.link}
        alt={card.name}
        onClick={handleClick}
        className="element__image"
      />
      <div className="element__wrapper">
        <h2 className="element__description">{card.name}</h2>
        <div className="element__likes">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <span className="element__number-likes">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}
