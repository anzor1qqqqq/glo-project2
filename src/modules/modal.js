'use strict'

const openModal = () => {
    const popupBtn = document.querySelectorAll('.popup-btn');
    const popup = document.querySelector('.popup');
    const popupClose = document.querySelector('.popup-close');
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

            if (window.screen.width > 768) {
                a();
            };

            function a() {
                let b = requestAnimationFrame(a);
                counter += 4;
                popupContent.style.left = counter+'%'

                if (counter === 40) cancelAnimationFrame(b);
            };
            
            document.body.style.overflowY = 'hidden';
            
            item.addEventListener('keydown', event => {
                if (event.keyCode === 27) closeModal();
            });
        });
    });

    popupClose.addEventListener('click', closeModal);

    popup.addEventListener('click', event => {
        if (event.target.classList.contains('popup')) closeModal();
    });
};

export default openModal;