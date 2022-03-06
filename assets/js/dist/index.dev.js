"use strict";

function openModal(modalSelector) {
  modalSelector.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal(modalSelector) {
  modalSelector.style.display = 'none';
  document.body.style.overflow = '';
}

function modal(modalSelector, modalTriggerSelector) {
  var modal = document.querySelector(modalSelector);
  var modalBtn = document.querySelectorAll(modalTriggerSelector);
  modalBtn.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      openModal(modal);
    });
  });
  modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal__close') || e.target == modal) {
      closeModal(modal);
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  modal('.modal', '[data-modal="callback"]');
});