'use strict';

var layout = document.querySelector('.layout');
var menuToggle = document.querySelector('.js-menuToggle');
var menuPopup = document.querySelector('.js-menuPopup');
var navigations = document.querySelectorAll('.js-navigation');
var inputName = document.querySelector('.js-validateName');
var inputTel = document.querySelector('.js-validateTel');
var sendForm = document.querySelector('.js-sendForm');


layout.classList.remove('no-js');

if (menuToggle) {
  menuToggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    menuToggle.classList.toggle('header-toggle--active');
    menuPopup.classList.toggle('header-nav--active');
    layout.classList.toggle('layout--no-scroll');
  });
}

if (navigations) {
  navigations.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      menuToggle.classList.remove('header-toggle--active');
      menuPopup.classList.remove('header-nav--active');
      layout.classList.remove('layout--no-scroll');
    });
  });
}

function inputHandlerTel(e) {
  var el = e.target;
  var pattern = /\D/g;

  el.value = el.value.replace(pattern, '');
}

function inputHandlerName(e) {
  var el = e.target;
  var pattern = /\d/g;

  el.value = el.value.replace(pattern, '');
}

if (inputTel) {
  inputTel.addEventListener('input', inputHandlerTel);
}

if (inputName) {
  inputName.addEventListener('input', inputHandlerName);
}

if (sendForm) {
  sendForm.addEventListener('click', function () {
    var obj = {
      name: inputName.value,
      tel: inputTel.value,
    };
    var serialObj = JSON.stringify(obj);
    localStorage.setItem('order', serialObj);
  });
}
