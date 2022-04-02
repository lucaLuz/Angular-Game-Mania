const btnMobile = document.getElementById('btn-menu');
function toggleMenu () {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
btnMobile.addEventListener('click', toggleMenu);
