export const modalFunc = () => {
    const modal = document.querySelector('.popup') //блок, где лежит модальное окно
    const buttons = document.querySelectorAll('.popup-btn')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {

            modal.style.display = 'block' //заблокировали экран

            if (window.screen.width > 768) { //если ширина экрана устройства больше...,
                appearanceModal() //то запускай анимацию
            };
        })
    });

    const appearanceModal = () => { //функция анимир.появления окна

        modal.style.opacity = 0; //Устанавливаем начальное значение прозрачности элемента

        let idInterval = setInterval(() => {

            modal.style.opacity = parseFloat(modal.style.opacity) + 0.1; //увеличивай прозрачность на 0,1

            if (modal.style.opacity >= 1) { //если прозрачность 1, 
                clearInterval(idInterval); //то очисти идентификатор/остановка анимации
            }

        }, 50); //увеличивай прозрачность каждые ...мсек        
    };

    const disappearanceModal = () => { //функция анимир.исчезновения окна

        let idInterval = setInterval(() => {
            modal.style.opacity = parseFloat(modal.style.opacity) - 0.1;

            if (modal.style.opacity <= 0) {
                clearInterval(idInterval);
                modal.style.display = 'none'
            }
        }, 50);
    };

    modal.addEventListener('click', (e) => { //что ты кликнул на блоке, где модал.окно?
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            //если при клике мы получим null, т.е. кликнули элемент НЕ с классом модал.окна ИЛИ есть класс кнопки-крестика

            if (window.screen.width > 768) {
                disappearanceModal()
            } else {
                modal.style.display = 'none' //разблокируй экран (закрой модал.окно)
            }
        }
    })
}