'use strict';

const hello = document.querySelector('p');
const today = document.getElementById('total');
const currentTime = document.getElementById('total-time');
const daysNewYear = document.getElementById('total-days');

let date = new Date();

const getGreetings = () => {

    const greetings = ['Доброй ночи!', 'Доброе утро!', 'Добрый день!', 'Добрый вечер!']

    let hours = date.getHours();

    if (hours > 23 || hours < 6) {
        hours = 0
    } else if (hours < 11) {
        hours = 1
    } else if (hours < 18) {
        hours = 2
    } else {
        hours = 3
    }

    hello.innerHTML = "<p>" + greetings[hours] + "</p>"
}
getGreetings()

const getWeekDay = () => {

    const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    let day = date.getDay();

    today.innerHTML = '<span id="total">' + week[day] + '</span>';

}
getWeekDay()

const getCurrentTime = () => {
    let hours = date.toLocaleTimeString('en');

    currentTime.innerHTML = '<span id="total">' + hours + '</span>';
}
getCurrentTime()

const getDaysNewYear = () => {
    date = new Date('31 december 2024');
    let dateNow = new Date().getTime(); //миллисекунды до текущего времени на ПК
    let timeRemaining = (date - dateNow) / 1000; //осталось до НГ в сек
    let daysLeft = Math.floor(timeRemaining / 60 / 60 / 24);

    function getNoun(number, one, two, five) { //верное окончание сущ-ного
        daysLeft = Math.abs(number);
        daysLeft %= 100;
        if (daysLeft >= 5 && daysLeft <= 20) {
            return five;
        }
        daysLeft %= 10;
        if (daysLeft === 1) {
            return one;
        }
        if (daysLeft >= 2 && daysLeft <= 4) {
            return two;
        }
        return five;
    }

    daysNewYear.innerHTML = '<span id="totaldays">' + daysLeft + getNoun(daysLeft, ' день', ' дня', ' дней') + '</span>';
}
getDaysNewYear()
