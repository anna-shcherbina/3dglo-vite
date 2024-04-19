export const timer = (deadline) => { //получаем deadline прямо из main.js
    console.log(deadline);
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => { //ф-ция представляет рассчит.время для updateClock

        let dateStop = new Date(deadline).getTime(); //миллисекунды до дедлайна
        let dateNow = new Date().getTime(); //миллисекунды до текущего времени на ПК
        let timeRemaining = (dateStop - dateNow) / 1000; //разница в сек
        //let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60); //остаток от деления на 60

        return { timeRemaining, hours, minutes, seconds } //ф-ция возвращает объект с рассчит.временем
        //название ключа соответствует названию своего значения
    }

    const updateClock = () => { //функция обновляет таймер на экране
        let getTime = getTimeRemaining(); //заносим результат функции getTimeRemaining

        timerHours.textContent = getTime.hours; //записали в вёрстку
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;

        if (getTime.timeRemaining > 0) { //пока секунды до дедлайна не кончились, запускай setTimeout
            setTimeout(updateClock, 1000);
        };
    }

    updateClock();

}