const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", toggleMenu);
nav.addEventListener("click", closeMenu);

function toggleMenu() {
  nav.classList.toggle("navbar");
  hamburger.classList.toggle("change");
}

function closeMenu(event) {
  nav.classList.remove("navbar");
  hamburger.classList.remove("change");
}

// --------------------
// const form = document.querySelector("#signIn");
const button = document.querySelector(".header__button");
const buttonAdaptive = document.querySelector(".header__li_modal");
const popup = document.querySelector(".modal");
const closeButton = document.querySelector(".modal__close");
const modalSignIn = document.querySelector(".modal__block-signIn");
const modalSignUp = document.querySelector(".modal__block-signUp");
const modalSignReg = document.querySelector(".modal__block-signReg");
const reg = document.querySelector(".modal__reg");
const log = document.querySelector(".modal__log");
const pass = document.querySelector(".modal__pass");
const buttonSignIn = document.querySelector(".modal__button_type_signIn");
const buttonSignUp = document.querySelector(".modal__button_type_signUp");
const buttonPassword = document.querySelector(".modal__button_type_password");

function openModalSignIn() {
  popup.classList.add("modal_active");
  modalSignIn.classList.add("modal__block-signIn_active");
  modalSignUp.classList.remove("modal__block-signUp_active");
  modalSignReg.classList.remove("modal__block-signReg_active");
  popup.addEventListener("submit", (e) => handleSubmit(e));
}

function handleSubmit(e) {
  e.preventDefault();
}

// form.addEventListener("submit", (e) => {
//   e.prevent.Default();
//   e.target.reset();
// });

function openModalSignUp() {
  popup.classList.add("modal_active");
  modalSignIn.classList.remove("modal__block-signIn_active");
  modalSignUp.classList.add("modal__block-signUp_active");
}

function openModalReconst() {
  popup.classList.add("modal_active");
  modalSignIn.classList.remove("modal__block-signIn_active");
  modalSignUp.classList.remove("modal__block-signUp_active");
  modalSignReg.classList.add("modal__block-signReg_active");
}

function alertSignIn() {
  popup.classList.remove("modal_active");
  alert("You have successfully logged in !");
}

function alertSignUp() {
  popup.classList.remove("modal_active");
  alert("You have successfully registered !");
}

function alertPassword() {
  popup.classList.remove("modal_active");
  alert("You have successfully changed your password !");
}

function close() {
  popup.classList.remove("modal_active");
  modalSignIn.classList.remove("modal__block-signIn_active");
  modalSignUp.classList.remove("modal__block-signUp_active");
  modalSignReg.classList.remove("modal__block-signReg_active");
}

// слушатель для закрытия попапа по затемненной области
popup.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("modal") &&
    e.target.classList.contains("modal_active")
  ) {
    close();
  }
});

button.addEventListener("click", openModalSignIn);
buttonAdaptive.addEventListener("click", openModalSignIn);
closeButton.addEventListener("click", close);
reg.addEventListener("click", openModalSignUp);
log.addEventListener("click", openModalSignIn);
pass.addEventListener("click", openModalReconst);

buttonSignIn.addEventListener("click", alertSignIn);
buttonSignUp.addEventListener("click", alertSignUp);
buttonPassword.addEventListener("click", alertPassword);

// document.addEventListener("submit", (e) => {
//   e.prevent.Default();
//   e.target.reset();
// });
// -------
// Resultpass.value = "";
// -------
// function ClearText(Resultpass) {
//   Resultpass.value = " ";
// }
// -------
// popup = document.getElementById("signIn");
// popup.messages.value = "";
// -------
// document.getElementById("signIn").reset();
// -------
// HTMLFormElement.reset();
// -------
// document.querySelectorAll(selector)
// .forEach(function (item) {
//   item.value = "";
// });
// -------
// document.getElementById("signIn").value = "";

// document.querySelectorAll("popup__input").value = "";
// самое правильное и простое form.reset();
