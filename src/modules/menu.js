'use strict';

const CreateMenu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = document.querySelectorAll('.close-modal');

    let handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    document.querySelectorAll('a').forEach(elem => {
        elem.addEventListener('click', event => {
            if (elem.getAttribute('href')) {
                event.preventDefault();
                const id = elem.getAttribute('href');

                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });  
            };
        });
    });

    closeBtn.forEach(elem => elem.addEventListener('click', handleMenu));
    menuBtn.addEventListener('click', handleMenu);
};

export default CreateMenu; 