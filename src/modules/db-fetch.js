'use strict';

const createdbServ = (url, idForm, arrInfo = {}) => {
    const form = document.querySelector(idForm);
    let bool = true;
    let elemPreload;

    const newElem = document.createElement('div');
    newElem.style.color = 'white';
    newElem.style.margin = '30px';

    const messageCompletLoad = 'Мы отпраили ваши данные, с вами свяжется наш менеджер';
    const messageErrorLoad = 'Ошибка';

    const sendDate = async (info) => {
        return await fetch(url, {
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
        bool = true;

        meanForm.forEach((item) => {
            if (item == '') bool = false;
        });

        if (bool) {
            elemPreload = `
            <div class="example">
                <div class="sk-circle-fade">
                <div class="sk-circle-fade-dot"></div>
                <div class="sk-circle-fade-dot"></div>
                <div class="sk-circle-fade-dot"></div>
                <div class="sk-circle-fade-dot"></div>
                <div class="sk-circle-fade-dot"></div>
                <div class="sk-circle-fade-dot"></div>
                <div class="sk-circle-fade-dot"></div>
                <div class="sk-circle-fade-dot"></div>
                <div class="sk-circle-fade-dot"></div>
                <div class="sk-circle-fade-dot"></div>
                <div class="sk-circle-fade-dot"></div>
                <div class="sk-circle-fade-dot"></div>
                </div>
            </div>
            `;
            form.append(newElem)
            form.insertAdjacentHTML('beforeend', elemPreload);

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

                document.querySelector('.example').remove(elemPreload);
                newElem.textContent = messageCompletLoad;
            })
            .catch((error) => {
                console.log(error);

                document.querySelector('.example').remove(elemPreload);
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
    
            submitForm();
        });
    } catch (error) {        
        console.log(error.message);
    };
};

///ВАЛИДИЦИЮ ОФОРМИЛ В ФАЙЛЕ - regular

export default createdbServ;