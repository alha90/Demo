const menuBar = document.querySelector(".hamburger");
const openMenu = document.querySelector(".nav-bar");
menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('change');
    openMenu.classList.toggle('open');
})
openMenu.addEventListener('click', () => {
    openMenu.classList.toggle('open');
    menuBar.classList.toggle('change');
})

