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
});