'use strict';

const getDb = () => {
    const sendData = (obj, url) => {

        return fetch(url, {
            method: 'POST',

            body: obj,

            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((respone) => respone.json()).then((obj) => console.log(obj)).catch(() => console.log('error'));
    };

    const getData = () => {
        const fet = fetch('../db.json');
        let save;

        function add(g) {
            save = g;
            console.log(save);
        };
    
        fet.then((response) => response.json()).then((obj) => add(JSON.stringify(obj))).catch(() => console.log('error'));;

        sendData(save, 'https://jsonplaceholder.typicode.com/posts');
    };

    getData();
};

export default getDb;