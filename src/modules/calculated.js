'use strict';

import {animate} from './helpers';

const createCalc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');

    let typeInterior;
    let quentRoom;
    let dayRealease;
    let tally;

    const fooAnimated = (a) => {
        animate({
            duration: 100,

            timing(timeFraction) {
              return timeFraction;
            },

            draw(progress) {
                total.textContent = parseInt(progress * a);
            },
        });
    };

    const countCalc = () => {
        if (calcType.selectedIndex !== 0) {
            typeInterior = +calcType[calcType.selectedIndex].value;

            calcSquare.style.opacity = 1;
            calcSquare.style.borderColor = '#19b5fe';
            calcSquare.disabled = false;
        } else {
            calcSquare.style.opacity = '';
            calcSquare.style.borderColor = '';
            calcSquare.disabled = true;
            calcSquare.value = '';
            total.textContent = 0;
        };

        if (calcSquare.value !== '') {  
            calcCount.style.opacity = 1;
            calcCount.style.borderColor = '#19b5fe';
            calcCount.disabled = false;

            tally = Math.ceil(typeInterior * calcSquare.value * price);

            fooAnimated(tally)
        } else {
            calcCount.style.opacity = '';
            calcCount.style.borderColor = '';
            calcCount.disabled = true;
            calcCount.value = '';
            total.textContent = 0;
        };

        if (calcCount.value !== '') {
            quentRoom = 1;
            calcCount.value > 1 ? quentRoom += calcCount.value / 10 : quentRoom = 1;

            calcDay.style.opacity = 1;
            calcDay.style.borderColor = '#19b5fe';
            calcDay.disabled = false;

            tally = Math.ceil(tally * quentRoom);

            fooAnimated(tally)
        } else {
            calcDay.style.opacity = '';
            calcDay.style.borderColor = '';
            calcDay.disabled = true;
            calcDay.value = '';
        };

        if (calcDay.value !== '') {
            calcDay.value < 5 ? dayRealease = 2 : calcDay.value < 10 ? dayRealease = 1.5 : dayRealease = 1;

            tally = Math.ceil(tally * dayRealease);

            fooAnimated(tally)
        };
    };

    calcBlock.addEventListener('input', () => {
        countCalc();
    });
};

export default createCalc;