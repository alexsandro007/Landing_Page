document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const phone = document.querySelector('.header__phone');
    const links = document.querySelectorAll('.header__nav a, .header__phone');

    const process__arrow__button = document.querySelectorAll('.process__arrow');
    const process__text = document.querySelectorAll('.process__text');
    const arrow = document.querySelectorAll('.bx-chevron-down');

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

    // Открытие/закрытие текста
    process__arrow__button.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            process__text[index].classList.toggle('active');
            arrow[index].classList.toggle('active');
        });
    })
});