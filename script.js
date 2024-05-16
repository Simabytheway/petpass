document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menuContent = document.querySelector('.menu-content');

    menuBtn.addEventListener('click', () => {
        menuContent.classList.toggle('show');
    });
});
