'use strict';

const CreateMenu = () => {
    const menu = document.querySelector('menu');
    const listBtn = document.querySelectorAll('.list_btn');
    const swipe = document.querySelector('.swipe');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    listBtn.forEach(elem => {
        elem.addEventListener('click', event => {
            if (event.target.getAttribute('href') && event.target.classList.contains('close-modal')) {
                event.preventDefault();
                const id = event.target.getAttribute('href');

                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });  
            };
        });
    }); 

    swipe.addEventListener('click', event => {
        if (event.target.closest('.swipe')) {
            event.preventDefault();
            
            let a = event.target.closest('.swipe')
            const id = a.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        };
    });

    document.addEventListener('click', event => {
        if (menu.classList.contains('active-menu') && !event.target.closest('.active-menu')) {
            handleMenu();
        } else {
            if (event.target.classList.contains('close-modal')) handleMenu();
            if (event.target.classList.contains('menu') || event.target.closest('.menu')) handleMenu();
        };
    });
};

export default CreateMenu; 