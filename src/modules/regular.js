'use strict';

const checkRegExp = () => {
    const calcItem = document.querySelectorAll('.calc_reg');
    const messInput = document.querySelector('.mess');
    const emailInput = document.querySelectorAll('[type="email"]');
    const telInput = document.querySelectorAll('[type="tel"]');

    calcItem.forEach(item => {
        item.addEventListener('input', elem => {
            elem.target.value = elem.target.value.replace(/\D+/g, '')
        });
    });

    messInput.addEventListener('input', elem => {
        elem.target.value = elem.target.value.replace(/[^\а-яА-Я\-?\s]+$/g, '')
    });

    emailInput.forEach(item => {
        item.addEventListener('input', elem => {
            elem.target.value = elem.target.value.replace(/[^\a-zA-Z?\.?\-?\_?\!?\~?\*?\'?\@]+$/g, '')
        });
    });

    telInput.forEach(item => {
        item.addEventListener('input', elem => {
            elem.target.value = elem.target.value.replace(/[^\d\-\()]+/g, '');
        });
    });
};

export default checkRegExp;