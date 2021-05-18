'use strict';

const inputName = document.querySelector('.js-validateName');
const inputTel = document.querySelector('.js-validateTel');
const form = document.querySelector('.js-form');
const sendForm = document.querySelector('.js-sendForm');
const openMenu = document.querySelector('.js-openMenu');

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

openMenu.addEventListener('checked', () => {
  document.querySelector('.header-nav').classList.add ('header-nav--js');
  },
);


