/*let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');*/

const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');
menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    if(navMenu.classList.contains('open')){
        menuBtn.textContent = 'x';
    } else{
        menuBtn.textContent = '-';
    }
});
/*window.onscroll = () => {
    SpeechRecognitionResult.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
};

scrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

scrollReveal().reveal('.home-content, .heading', { origin: 'top'});
scrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
scrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
scrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});*/

