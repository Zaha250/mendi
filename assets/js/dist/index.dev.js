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
  var form = document.getElementById('sendEmail');
  form.addEventListener('submit', function _callee(e) {
    var phone, response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            phone = form.querySelector('#phone').value;
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch("send.php?phone=".concat(phone)));

          case 4:
            response = _context.sent;
            console.log(response);

            if (response.ok) {
              document.querySelector('.modal-right').innerHTML = '';
              document.querySelector('.modal-left').remove();
              document.querySelector('.modal-right').innerHTML = '<h2 class="modal__title title response__message">Данные отправлены</h2>';
            }

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});