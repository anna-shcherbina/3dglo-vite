export const modalFunc = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {

            modal.style.display = 'block' //заблокировали экран

            if (window.screen.width > 768) { //если ширина экрана устройства больше...,
                appearanceModal() //то запускай анимацию
            };
        })
    });

    closeBtn.addEventListener('click', () => {

        if (window.screen.width > 768) {
            disappearanceModal()
        };

        setTimeout(() => {
            modal.style.display = 'none' //разблокируй экран через...
        }, 500);
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
            }
        }, 50);
    };

}