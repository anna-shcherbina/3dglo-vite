export const sliderFunc = () => {
    const sliderBlock = document.querySelector('.portfolio-content') //список <ul> - слайдер
    const slides = document.querySelectorAll('.portfolio-item') // слайды
    const dots = document.querySelectorAll('.dot') // точки внизу слайдера
    const timeInterval = 2000
    let currentSlide = 0
    let interval

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const autoSlide = () => { //чтобы слайды автоматически переключались
        prevSlide(slides, currentSlide, 'portfolio-item-active') //у активного на дан.момент слайда удаляем класс-актив
        prevSlide(dots, currentSlide, 'dot-active') //у активной на дан.момент точки удаляем класс-актив
        currentSlide++ // увеличиваем на 1

        if (currentSlide >= slides.length) { // проверяем, не вышли за рамки длины массива?
            currentSlide = 0 // если да, то приравниваем к 0
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active') // добавляем класс-актив к первому слайду (с индексом 0) в массиве
        nextSlide(dots, currentSlide, 'dot-active') //добавляем класс-актив к первой точке (с индексом 0) в массиве
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer) //запуск autoSlide в интервале 2 секунды
    }

    const stopSlide = () => {
        clearInterval(interval) //очистка интервала
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()

        if (!e.target.matches('.dot, .portfolio-btn')) { //если элемент не с классом точки/стрелки
            return;
        }

        prevSlide(slides, currentSlide, 'portfolio-item-active') //у активного на дан.момент слайда удаляем класс-актив
        prevSlide(dots, currentSlide, 'dot-active') //у активной на дан.момент точки удаляем класс-актив

        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index
                }
            });
        }

        if (currentSlide >= slides.length) { // проверяем, не вышли за рамки длины массива?
            currentSlide = 0 // если да, то приравниваем к 0
        }

        if (currentSlide < 0) { // в случае с переключением через стрелки проверяем, стал меньше 0?
            currentSlide = slides.length - 1 // если да, то приравниваем к длине массива -1
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active') // добавляем класс-актив к первому слайду (с индексом 0) в массиве
        nextSlide(dots, currentSlide, 'dot-active') //добавляем класс-актив к первой точке (с индексом 0) в массиве
    })

    sliderBlock.addEventListener('mouseenter', (e) => { //наведение курсора с блока слайдера        
        if (e.target.matches('.dot, .portfolio-btn')) { //элемент с классом точки/стрелки?
            stopSlide();
        }
    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => { //уведение курсора с блока        
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval);
        }
    }, true)

    startSlide(timeInterval)
}