'use strict';

const checkRegExp = () => {
    const calcItem = document.querySelectorAll('.calc_reg');
    const messInput = document.querySelector('.mess');
    const emailInput = document.querySelectorAll('[type="email"]');
    const telInput = document.querySelectorAll('[type="tel"]');

    calcItem.forEach(item => {
        item.addEventListener('blur', elem => {
            let protectCalc = elem.target.value.toLowerCase().match(/[a0-9z-а0-9я]/g).join('');
            protectCalc = protectCalc.replace(/[a-z-а-я]/g, '');
            elem.target.value = protectCalc;
        });
    });

    messInput.addEventListener('blur', elem => {
        let protect;

        if (elem.target.value.match(/[\а-яА-Я\-?\s]+/g)) {
            protect = elem.target.value.toLowerCase().match(/[\а-яА-Я\-?\s]+/g).join('').trim();

            protect = protect.replace(/\-+$/g, '');
            protect = protect.replace(/^\-+/g, '');
            protect = protect.replace(/\s{2,}/g, ' ');
            protect = protect.replace(/\-{2,}/g, '-');

            let splited = protect[0].toUpperCase();
            let splited2 = [...protect].splice(1, );

            splited2.unshift(splited);
            splited2 = splited2.join(''); 

            elem.target.value = splited2;
        } else {
            elem.target.value = ''   ;
        };
    });

    emailInput.forEach(item => {
        item.addEventListener('blur', elem => {
            console.log(elem.target.value.toLowerCase().match(/[^\a-zA-Z?\.?\-?\_?\!?\~?\*?\'?\@]+$/g, ''));
        });
    });
/*
    telInput.forEach(item => {
        item.addEventListener('input', elem => {
            elem.target.value = elem.target.value.replace(/[^\d\-\()]+/g, '');
        });
    }); */
};

export default checkRegExp;