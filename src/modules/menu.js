'use strict';

const CreateMenu = () => {
    const menu = document.querySelector('menu');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    document.querySelectorAll('a').forEach(elem => {
        elem.addEventListener('click', event => {
            if (elem.getAttribute('href') && !event.target.classList.contains('close-btn')) {
                event.preventDefault();
                const id = elem.getAttribute('href');

                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });  
            };
        });
    });

    document.addEventListener('click', event => {
        if (event.target.closest('.active-menu')) {
            if (event.target.classList.contains('close-modal')) handleMenu();
            if (event.target.classList.contains('menu') || event.target.closest('.menu')) handleMenu();
        } else {
            handleMenu();
        };
        
    });
};

export default CreateMenu; 