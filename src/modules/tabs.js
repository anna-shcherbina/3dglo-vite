export const tabsFunc = () => {
    const tabContent = document.querySelectorAll('.service-tab');
    const tabPanel = document.querySelector('.service-header');
    const tabs = document.querySelectorAll('.service-header-tab');

    tabPanel.addEventListener('click', (e) => {
        //console.log(e.target); //что ты кликнул на панели с кнопками?
        //console.log(e.target.closest('.service-header-tab')); //выдаст div кликнутой кнопки с родит.классом

        if (e.target.closest('.service-header-tab')) { //если e.target – это кнопка (проверка родит.класса у элемента)

            const tabBtn = e.target.closest('.service-header-tab') //определяем, на какой кнопке произошёл клик 

            tabs.forEach((tab, index) => { //то перебирай табы             
                //console.log(tab);  // выводи в консоль кнопку (div)
                //console.log(index); // и ниже её индекс
                if (tab === tabBtn) { //если итерируемая кнопка - это кликнутая кнопка с классом...
                    tab.classList.add('active'); //то даём ей класс active (станет синим цветом)
                    tabContent[index].classList.remove('d-none'); //переключай соответствующий контент
                } else {
                    tab.classList.remove('active'); //а у всех остальных его удаляем
                    tabContent[index].classList.add('d-none'); //а все остальные контенты скрой
                };
            })
        }
    })

}
