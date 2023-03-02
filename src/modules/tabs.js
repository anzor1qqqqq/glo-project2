'use strict';

const switchTabs = () => {
    const serviceHeaderTab = document.querySelectorAll('.service-header-tab');
    const serviceTab = document.querySelectorAll('.service-tab');
    let dataTab;

    serviceHeaderTab.forEach(elem => {
        elem.addEventListener('click', () => {
            
            serviceHeaderTab.forEach(div => {
                div.classList.remove('active');
            });

            elem.classList.add('active');

            serviceTab.forEach(item => {
                item.classList.add('d-none');
            });

            dataTab = elem.dataset.tab;

            document.querySelector(dataTab).classList.remove('d-none');
        });
    });
};


export default switchTabs;