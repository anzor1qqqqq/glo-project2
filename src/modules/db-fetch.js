'use strict';

const getDb = () => {
    let objDb;
    let sendObj;

    const getData = (url, callback) => {
        const request = new XMLHttpRequest;
        request.open('GET', url);
        request.send();

        request.addEventListener('readystatechange', () => {
            if (request.status === 200 && request.readyState === 4) {
                let obj = JSON.parse(request.response);
                callback(obj);
            };
        });
    };

    const setData = (url, elem, callback) => {
        const request = new XMLHttpRequest;
        sendObj = JSON.stringify(elem);

        request.open('POST', url);
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        request.addEventListener('readystatechange', () => {
            if (request.status > 300 && request.readyState === 4) {
                console.error('error');
            };
        });

        request.send(sendObj);
    };


    const getObj = (obj1) => objDb = obj1;

    const getObj2 = (obj2) => console.log(obj2);

    getData('../db.json', getObj);
    getData('https://jsonplaceholder.typicode.com/posts', getObj2);

    setData('https://jsonplaceholder.typicode.com/posts', objDb);
};

export default getDb;