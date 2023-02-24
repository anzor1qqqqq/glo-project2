'use strict';

const timer = (dateUserDeadline) => {
    const timerDays = document.querySelector('.timer-days');
    const timerHours = document.querySelector('.timer-hours');
    const timerMinutes = document.querySelector('.timer-minutes');
    const timerSeconds = document.querySelector('.timer-seconds');

    let startTimer = () => {
        const dateToday = Date.parse(new Date);
        const dateDeadline = new Date(dateUserDeadline).getTime();

        const resul = (dateDeadline - dateToday) / 1000 ;

        const seconds = parseInt(resul % 60);
        const minutes = parseInt((resul / 60) % 60);
        const hours = parseInt((resul / 3600) % 24);
        const days = parseInt(resul / 90000);

        return {resul, seconds, minutes, hours, days};
    };

    let createTimer = () => {
        setInterval(() => {
            const {resul, seconds, minutes, hours, days} = startTimer();

            if (resul > 0) {
                days >= 10 ? timerDays.textContent = days : timerDays.textContent = '0' + days;
                hours >= 10 ? timerHours.textContent = hours : timerHours.textContent = '0' + hours;
                minutes >= 10 ? timerMinutes.textContent = minutes : timerMinutes.textContent = '0' + minutes;
                seconds >= 10 ? timerSeconds.textContent = seconds : timerSeconds.textContent = '0' + seconds;
            } else {
                timerDays.textContent = '00';
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                return;
            }
        }, 1000);
    };
    
    createTimer();
};

export default timer; 