'use strict';

const createdbServ = (url, idForm, arrInfo = {}) => {
    const form = document.querySelector(idForm);
    let bool = true;
    let a;

    const newElem = document.createElement('div');
    newElem.style.color = 'white';
    
    const messageLoad = 'Закрузка...';
    const messageCompletLoad = 'Мы отпраили ваши данные, с вами свяжется наш менеджер';
    const messageErrorLoad = 'Ошибка';

    const sendDate = (info) => {
        return fetch(url, {
            method: 'POST',

            body: JSON.stringify(info),

            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => response.json());
    };

    const submitForm = () => {
        const meanForm = new FormData(form);
        const obj = {};

        meanForm.forEach((item) => {
            if (item == '') bool = false;
        });

        if (bool) {
            newElem.textContent = messageLoad;
            form.append(newElem);

            meanForm.forEach((val, key) => {
                obj[key] = val;
            });

            if (arrInfo.text) {
                if (arrInfo.text == 'textContent') {
                    obj[arrInfo.id] = document.querySelector('#' + arrInfo.id).textContent; 
                } else {
                    obj[arrInfo.id] = document.querySelector('#' + arrInfo.id).value; 
                };  
            };
            
            sendDate(obj)
            .then((text) => {
                console.log(text);
                newElem.textContent = messageCompletLoad;
            })
            .catch((error) => {
                console.log(error);
                newElem.textContent = messageErrorLoad;         
            });
        } else {
            alert('Введите данные');
        };
    };
    
    try {
        if (!form) {
            throw new Error('ВЕРНИТЕ ФОРМУ');
        };

        form.addEventListener('submit', event => {
            event.preventDefault();
            bool = true;
    
            submitForm();
        });
    } catch (error) {        
        console.log(error.message);
    };
};

export default createdbServ;