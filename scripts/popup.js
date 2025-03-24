'use strict'
const regHeaderButton = document.querySelector('.header__registration');
const popup = document.querySelector('.popup');
const closeRegButton = document.querySelector('.popup__close');
const dialog = document.querySelector('.dialog');
const cancell = document.querySelector('.cancellbutton')
if (regHeaderButton && popup && closeRegButton){
    console.log('форма и кнопка регистрации существуют');
    regHeaderButton.addEventListener('click', () => {
    popup.removeAttribute('hidden'), dialog.removeAttribute('hidden');
    });
    closeRegButton.addEventListener('click', () => {
    popup.setAttribute('hidden', true), dialog.setAttribute('hidden', true);
    });
    window.addEventListener('click', (event) => {
        if (event.target === dialog) {
            popup.setAttribute('hidden', true), dialog.setAttribute('hidden', true);
        }
    });
    cancell.addEventListener('click', () => {
        popup.setAttribute('hidden', true), dialog.setAttribute('hidden', true);
        });

}