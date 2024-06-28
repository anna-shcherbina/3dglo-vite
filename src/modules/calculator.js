export const calcFunc = () => {

    const inputsCalc = document.querySelectorAll("input.calc-item")
    const inputsName = document.querySelectorAll('[name="user_name"]')
    const inputsTel = document.querySelectorAll('[type="tel"]')
    const inputsEmail = document.querySelectorAll('[type="email"]')
    const inputFooterMessage = document.getElementById('form2-message')

    inputsName.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+$/g, ""); //кроме кириллицы, дефиса, пробела заменяй на пустую строку
        });
    });

    inputFooterMessage.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+$/g, "");
    })

    inputsCalc.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d]/g, ""); //замени на пустую строку всё, кроме чисел
        });
    });

    inputsTel.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\-\(\)]+$/g, ""); //замени на пустую строку всё, кроме цифр, дефиса, скобок
        });
    });

    //замени на пустую строку всё, кроме латинницы, цифр и спецсимволов:  @  -  _  . ! ~ * '

    inputsEmail.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z0-9\@\s\-\_\.\!\~\*\']+$/g, "");
        });
    });

}