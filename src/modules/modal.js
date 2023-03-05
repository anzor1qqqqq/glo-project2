'use strict';

import {animate} from './helpers';

const openModal = () => {
    const popupBtn = document.querySelectorAll('.popup-btn');
    const popup = document.querySelector('.popup');
    const popupContent = document.querySelector('.popup-content');

    let counter = 0;

    const closeModal = () => {
        popup.style.display = 'none';
        document.body.style.overflowY = '';
        counter = 0;
    };

    popupBtn.forEach(item => {
        item.addEventListener('click', () => {
            popup.style.display = 'flex';

            if (window.screen.width > 768) a();
            
            function a() {
                animate({
                    duration: 250,

                    timing(timeFraction) {
                      return timeFraction;
                    },

                    draw(progress) {
                      popupContent.style.left = progress * 40 + '%';
                    },
                  });
            };
            
            document.body.style.overflowY = 'hidden';
            
            item.addEventListener('keydown', event => {
                if (event.keyCode === 27) closeModal();
            });
        });
    });
    

    popup.addEventListener('click', event => {
        if (event.target.classList.contains('popup') || event.target.classList.contains('popup-close')) closeModal();
    });
};

export default openModal;