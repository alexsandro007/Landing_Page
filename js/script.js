document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const phone = document.querySelector('.header__phone');
    const links = document.querySelectorAll('.header__nav a, .header__phone');

    // Открытие/закрытие меню
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        phone.classList.toggle('active');
    });
    
    // Закрытие меню при клике на ссылку
    links.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            nav.classList.remove('active');
            phone.classList.remove('active');
        });
    });

    const process__arrow__button = document.querySelectorAll('.process__arrow');
    const process__text = document.querySelectorAll('.process__text');
    const arrow = document.querySelectorAll('.bx-chevron-down');
    
    // Открытие/закрытие текста
    process__arrow__button.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            process__text[index].classList.toggle('active');
            arrow[index].classList.toggle('active');
        });
    })

    // Переключение блока "Дополнительные услуги"
    const additionalLabel = document.querySelector('.order__additional-label');
    const additionalContent = document.querySelector('.order__additional-content');
    const additionalArrow = additionalLabel.querySelector('.bx-chevron-down');

    additionalLabel.addEventListener('click', () => {
        additionalContent.classList.toggle('active');
        additionalArrow.classList.toggle('bx-chevron-up');
    });

    // Обратный отсчет времени
    const timerElement = document.querySelector('.order__timer-value');
    let time = 5 * 3600 + 37 * 60 + 25; // 05:37:25 в секундах

    function updateTimer() {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (time > 0) {
            time--;
        } else {
            clearInterval(timerInterval);
            timerElement.textContent = '00:00:00';
        }
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    // Слайдер
    const tabs = document.querySelectorAll('.fleet__tab');
    const slides = document.querySelectorAll('.fleet__slide');
    const dots = document.querySelectorAll('.fleet__dot');
    const prevArrow = document.querySelector('.fleet__arrow--left');
    const nextArrow = document.querySelector('.fleet__arrow--right');
    const fleet__slide__title = document.getElementById('fleet__slide__title')
    let fleet_slide_titles = ['Газель 3 метра / 1,5 тонны', 'Газель 4 метра / 2 тонны', 'Газель 5 метров / 3 тонны'];

    let currentSlide = 0;

    // Функция для показа слайда
    function showSlide(index) {
        if (index === currentSlide) return; // Если слайд уже активен, ничего не делаем

        // Убираем активные классы
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        tabs.forEach(tab => tab.classList.remove('active'));

        // Показываем нужный слайд
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        tabs[index].classList.add('active');

        fleet__slide__title.innerHTML = fleet_slide_titles[index];

        currentSlide = index;
    }

    // Переключение через табы
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Переключение через точки
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Переключение через стрелки
    prevArrow.addEventListener('click', () => {
        let newIndex = currentSlide - 1;
        if (newIndex < 0) {
            newIndex = slides.length - 1;
        }
        showSlide(newIndex);
    });

    nextArrow.addEventListener('click', () => {
        let newIndex = currentSlide + 1;
        if (newIndex >= slides.length) {
            newIndex = 0;
        }
        showSlide(newIndex);
    });

    // Показываем первый слайд при загрузке
    showSlide(currentSlide);
    
});