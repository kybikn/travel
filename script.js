// ------------hamburger------------
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", toggleMenu);
nav.addEventListener("click", closeMenu);

function toggleMenu() {
  nav.classList.toggle("navbar");
  hamburger.classList.toggle("change");
}

function closeMenu(event) {
  if (event.target.classList.contains("header__link")) {
    nav.classList.remove("navbar");
    hamburger.classList.remove("change");
  }
}

// ------------popup------------
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


// ------------slider------------
const dots = document.querySelectorAll('.circles__dot')
const imageSlider = document.querySelectorAll('.slider__img')
const textSlider = document.querySelectorAll('.slider__text')
const leftArrow = document.querySelector('.arrows_left')
const rightArrow = document.querySelector('.arrows_right')

dots[0].classList.add('active__dots')
imageSlider[0].classList.add('active')

let counter = 0;

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', () => {
    for (let k = 0; k < imageSlider.length; k++) {
      dots[k].classList.remove('active__dots')
      imageSlider[k].classList.remove('active')
    }
    counter = i;
    imageSlider[counter].classList.add('active');
    dots[counter].classList.add('active__dots');
  })
}

leftArrow.addEventListener('click', () => {
  for (let k = 0; k < imageSlider.length; k++) {
    dots[k].classList.remove('active__dots')
    imageSlider[k].classList.remove('active')
  }
  counter--
  if (counter < 0) {
    counter = imageSlider.length - 1
  }
  imageSlider[counter].classList.add('active');
  dots[counter].classList.add('active__dots');
})

rightArrow.addEventListener('click', () => {
  for (let k = 0; k < imageSlider.length; k++) {
    dots[k].classList.remove('active__dots')
    imageSlider[k].classList.remove('active')
  }
  counter++
  if (counter >= imageSlider.length) {
    counter = 0
  }
  imageSlider[counter].classList.add('active');
  dots[counter].classList.add('active__dots');
})


function slowSlider() {
  for (let k = 0; k < imageSlider.length; k++) {
    dots[k].classList.remove('active__dots')
    imageSlider[k].classList.remove('active')
  }
  counter++
  if (counter >= imageSlider.length) {
    counter = 0
  }
  imageSlider[counter].classList.add('active');
  dots[counter].classList.add('active__dots');
}











