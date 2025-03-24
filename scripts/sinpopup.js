'use strict'
const sinHeaderButton = document.querySelector('.header__sinin');
const sinpopup = document.querySelector('.sinpopup');
const sincloseRegButton = document.querySelector('.sinpopup__close');
const sindialog = document.querySelector('.sindialog');
const sincancell = document.querySelector('.sincancellbutton')
if (sinHeaderButton && sinpopup && sincloseRegButton){
    console.log('форма и кнопка входа существуют');
    sinHeaderButton.addEventListener('click', () => {
    sinpopup.removeAttribute('hidden'), sindialog.removeAttribute('hidden');
    });
    sincloseRegButton.addEventListener('click', () => {
    sinpopup.setAttribute('hidden', true), sindialog.setAttribute('hidden', true);
    });
    window.addEventListener('click', (event) => {
        if (event.target === sindialog) {
            sinpopup.setAttribute('hidden', true), sindialog.setAttribute('hidden', true);
        }
    });
    sincancell.addEventListener('click', () => {
        sinpopup.setAttribute('hidden', true), sindialog.setAttribute('hidden', true);
        });

}