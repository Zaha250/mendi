function openModal(modalSelector) {
    modalSelector.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
  
function closeModal(modalSelector) {
    modalSelector.style.display = 'none';
    document.body.style.overflow = '';
}
  
function modal(modalSelector, modalTriggerSelector) {
    const modal = document.querySelector(modalSelector);
    const modalBtn = document.querySelectorAll(modalTriggerSelector);

    modalBtn.forEach(trigger => {
        trigger.addEventListener('click', () => {
            openModal(modal);
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal__close') || e.target == modal) {
            closeModal(modal);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    modal('.modal', '[data-modal="callback"]');
    const form = document.getElementById('sendEmail');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const phone = form.querySelector('#phone').value;

        const response = await fetch(`send.php?phone=${phone}`);
        console.log(response);

        if(response.ok) {
            document.querySelector('.modal-right').innerHTML = '';
            document.querySelector('.modal-left').remove();
            document.querySelector('.modal-right').innerHTML = '<h2 class="modal__title title response__message">Данные отправлены</h2>';
        }
    });
});