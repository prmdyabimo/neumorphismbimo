// menu button
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

// responsive navbar ke halaman lain
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}


// theme toggler
// dark/light mode
let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')) {
        // menyalakan
        document.body.classList.add('active');
    } else {
        // mematikan
        document.body.classList.remove('active');
    }
}

// scroll to-top
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('on');
    } else {
        toTop.classList.remove('on');
    }
})