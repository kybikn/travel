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
const form = document.getElementById("#signIn");
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
  let emailSignIn = document.getElementById("emailSignIn").value;
  let passwordSignIn = document.getElementById("passwordSignIn").value;
  alert('email:' + ' ' + emailSignIn + '   ' + 'password:' + ' ' + passwordSignIn);
  popup.classList.remove("modal_active");
  reset();
}

function alertSignUp() {

  let emailSignUp = document.getElementById("emailSignUp").value;
  let passwordSignUp = document.getElementById("passwordSignUp").value;
  alert('email:' + ' ' + emailSignUp + '   ' + 'password:' + ' ' + passwordSignUp);
  popup.classList.remove("modal_active");
  reset();
}

function alertPassword() {
  let emailSignReg = document.getElementById("emailSignReg").value;
  let passwordNewSignReg = document.getElementById("passwordNewSignReg").value;
  let passwordSignReg = document.getElementById("passwordSignReg").value;
  alert('email:' + ' ' + emailSignReg + '   ' + 'new password:' + ' ' + passwordNewSignReg + '   ' + 'password:' + ' ' + passwordSignReg);
  alert("You have successfully changed your password !");
  popup.classList.remove("modal_active");
  reset();
}

function reset() {
  emailSignIn.value = "";
  passwordSignIn.value = "";
  emailSignUp.value = "";
  passwordSignUp.value = "";
  emailSignReg.value = "";
  passwordNewSignReg.value = "";
  passwordSignReg.value = "";
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


// -------------------------------------------------------------------
// const point = document.querySelectorAll(".slider__img");
// const imageSlider = document.querySelectorAll(".circles__dot");
// const leftBtn = document.querySelector(".arrows__left");
// const rightBtn = document.querySelector(".arrows__right");


let point = document.querySelectorAll('.circles__dot')
let imageSlider = document.querySelectorAll('.imageSlider')
let leftBtn = document.getElementById('leftBtn')
let rightBtn = document.getElementById('rightBtn')

point[0].classList.add('activeImage')
imageSlider[0].classList.add('activeImage')

let counter = 0;

for (let i = 0; i < point.length; i++) {
  point[i].addEventListener('click', () => {
    for (let k = 0; k < imageSlider.length; k++) {
      point[k].classList.remove('activeImage')
      imageSlider[k].classList.remove('activeImage')
    }
    counter = i;
    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
  })
}

leftBtn.addEventListener('click', () => {
  for (let k = 0; k < imageSlider.length; k++) {
    point[k].classList.remove('activeImage')
    imageSlider[k].classList.remove('activeImage')
  }
  counter--
  if (counter < 0) {
    counter = imageSlider.length - 1
  }
  imageSlider[counter].classList.add('activeImage');
  point[counter].classList.add('activeImage');
})

rightBtn.addEventListener('click', () => {
  for (let k = 0; k < imageSlider.length; k++) {
    point[k].classList.remove('activeImage')
    imageSlider[k].classList.remove('activeImage')
  }
  counter++
  if (counter >= imageSlider.length) {
    counter = 0
  }
  imageSlider[counter].classList.add('activeImage');
  point[counter].classList.add('activeImage');
})


function slowSlider() {
  for (let k = 0; k < imageSlider.length; k++) {
    point[k].classList.remove('activeImage')
    imageSlider[k].classList.remove('activeImage')
  }
  counter++
  if (counter >= imageSlider.length) {
    counter = 0
  }
  imageSlider[counter].classList.add('activeImage');
  point[counter].classList.add('activeImage');
}











