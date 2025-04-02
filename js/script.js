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
});