'use strict';

const checkRegExp = () => {
    const calcItem = document.querySelectorAll('.calc_reg');
    const messInput = document.querySelector('.mess');
    const emailInput = document.querySelectorAll('[type="email"]');
    const telInput = document.querySelectorAll('[type="tel"]');

    calcItem.forEach(item => {
        item.addEventListener('blur', elem => {
            let protectCalc = elem.target.value.toLowerCase().match(/[a0-9z-а0-9я]/g).join('');
            console.log('protectCalc: ', protectCalc);
            protectCalc = protectCalc.replace(/[a-z-а-я]/g, '');
            elem.target.value = protectCalc;
        });
    });

    messInput.addEventListener('blur', elem => {
        let protectMess;

        if (elem.target.value.match(/[\а-яА-Я\-?\s]+/g)) {
            protectMess = elem.target.value.toLowerCase().match(/[\а-яА-Я\-?\s]+/g).join('').trim();

            protectMess = protectMess.replace(/\-+$/g, '');
            protectMess = protectMess.replace(/^\-+/g, '');
            protectMess = protectMess.replace(/\s{2,}/g, ' ');
            protectMess = protectMess.replace(/\-{2,}/g, '-');

            let splited = protectMess[0].toUpperCase();
            let splited2 = [...protectMess].splice(1,);

            splited2.unshift(splited);
            splited2 = splited2.join(''); 

            elem.target.value = splited2;
        } else {
            elem.target.value = ''   ;
        };
    });

    emailInput.forEach(item => {
        item.addEventListener('blur', elem => {
            let protectEmail;

            if (elem.target.value.toLowerCase().match(/[\a-zA-Z0-9?\.?\-?\_?\!?\~?\*?\'?\@]+/g)) {
                protectEmail = elem.target.value.toLowerCase().match(/[\a-zA-Z0-9?\.?\-?\_?\!?\~?\*?\'?\@]+/g, '').join('').trim();

                elem.target.value = protectEmail;
            } else {
                elem.target.value = '';
            };
        });
    });

    telInput.forEach(item => {
        item.addEventListener('blur', elem => {
            let protectNumTel;

            if (elem.target.value.match(/[\d\-\()]+/g)) {
                protectNumTel = elem.target.value.match(/[\d\-\()]+/g).join('').trim();
                
                protectNumTel = protectNumTel.replace(/\-+$/g, '');
                protectNumTel = protectNumTel.replace(/^\-+/g, '');
                protectNumTel = protectNumTel.replace(/\s{2,}/g, ' ');
                protectNumTel = protectNumTel.replace(/\-{2,}/g, '-');

                elem.target.value = protectNumTel
            } else {
                elem.target.value = '';
            }
        });
    }); 
};

export default checkRegExp;