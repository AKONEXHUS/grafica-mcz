
/* MENU MOBILE */
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav nav');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const aberto = navMenu.classList.toggle('menu-open');
        menuToggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
        menuToggle.textContent = aberto ? '✕' : '☰';
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('menu-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.textContent = '☰';
        });
    });
}
