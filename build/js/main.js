'use strict';

const layout = document.querySelector('.layout');
const menuToggle = document.querySelector('.js-menuToggle');
const menuPopup = document.querySelector('.js-menuPopup');
const navigations = document.querySelectorAll('.js-navigation');

const inputName = document.querySelector('.js-validateName');
const inputTel = document.querySelector('.js-validateTel');
const form = document.querySelector('.js-form');
const sendForm = document.querySelector('.js-sendForm');

layout.classList.remove('no-js');



menuToggle.addEventListener('click', (evt) => {
  evt.preventDefault();
  menuToggle.classList.toggle('header-toggle--active');
  menuPopup.classList.toggle('header-nav--active');
});

navigations.forEach(trigger => (
  trigger.addEventListener('click', () => {
    menuToggle.classList.remove('header-toggle--active');
    menuPopup.classList.remove('header-nav--active');
  })
));

const inputHandlerTel = (e) => {
  const el = e.target;
  const pattern = /\D/g;

  el.value = el.value.replace(pattern, '');
};

const inputHandlerName = (e) => {
  const el = e.target;
  const pattern = /\d/g;

  el.value = el.value.replace(pattern, '');
};

inputTel.addEventListener('input', inputHandlerTel);
inputName.addEventListener('input', inputHandlerName);

sendForm.addEventListener('click', () => {
  const obj = {
    name: inputName.value,
    tel: inputTel.value,
  };
  const serialObj = JSON.stringify(obj);
  localStorage.setItem('order', serialObj);
});
