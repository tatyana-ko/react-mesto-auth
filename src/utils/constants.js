//Для редактирования профиля
const profileEditButton = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup_type_profile");
const closeButtons = document.querySelectorAll(".popup__button-close");
const formElementProfile = document.querySelector(".popup__form_profile");
const nameInput = formElementProfile.querySelector(".popup__input_type_name");
const jobInput = formElementProfile.querySelector(".popup__input_type_about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__description");
const saveButton = document.querySelector(".popup__button-save");
//Для формы добавления карточки
const addCardButton = document.querySelector(".profile__add-button");
const popupAddCard = document.querySelector(".popup_type_add-card");
//Для формы открытия картинки
const popupFullImage = document.querySelector(".popup_type_full-image");
const popupImage = popupFullImage.querySelector(".popup__full-image");
const popupTitle = popupFullImage.querySelector(".popup__image-title");
//Добавление карточки пользователем
const formAddCard = document.querySelector(".popup__form_add-card");
// const createCardButton = formAddCard.querySelector(".popup__button-save");
const cardName = document.querySelector(".popup__input_type_add-card-name");
const cardLink = document.querySelector(".popup__input_type_add-card-link");
const popups = document.querySelectorAll(".popup");
const cardsContainer = document.querySelector(".elements");
//Изменение аватара
const popupAddNewAvatar = document.querySelector(".popup_type_update-avatar");
const avatarUpdateButton = document.querySelector(".profile__avatar-button");
//Попап для подтверждения удаления карточки
const confirmPopup = document.querySelector(".popup_type_delete-card")

const objectForValidations = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__input_type_error", //красная нижняя рамка
  errorClass: "popup__form-error", //сообщение об ошибке
};

export {
  objectForValidations,
  cardsContainer,
  profileEditButton,
  popupEdit,
  closeButtons,
  formElementProfile,
  nameInput,
  jobInput,
  profileName,
  profileAbout,
  addCardButton,
  popupAddCard,
  popupFullImage,
  popupImage,
  popupTitle,
  formAddCard,
  cardName,
  cardLink,
  popups,
  popupAddNewAvatar,
  confirmPopup,
  avatarUpdateButton,
  saveButton,
};
