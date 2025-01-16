const nav = document.getElementById('navbar');
window.onscroll = function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
};
