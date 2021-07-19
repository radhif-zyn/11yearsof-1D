const showMenu = (toggleId, navId) => {
    const toggleMenu = document.getElementById(toggleId);
    const navMenu = document.getElementById(navId);

    if(toggleMenu && navMenu) {
        toggleMenu.addEventListener('click', () => {
            toggleMenu.classList.toggle('showed');
            navMenu.classList.toggle('showed');
        })
    }
}

showMenu('menu-toggle', 'nav-menu');

const navLinks = document.querySelectorAll('.nav-links')
function linkAction() {
    navLinks.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}

navLinks.forEach(n => n.addEventListener('click', linkAction));

// CHANGE NAVBAR STYLE ON SCROLL
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('nav-scrolled', window.scrollY > 0);
});

//HOME SECTION TEXT SLIDING ANIMATION
let innerTexts = document.querySelectorAll('.text-wrapper .innerText');
if(innerTexts) {
    //MAKE CLONE OF FIRST CHILD
    innerTexts.forEach(innerText => {
        let firstText = innerText.firstElementChild.cloneNode('true');
        innerText.appendChild(firstText)

        let i        = 0,
            speed    = 2500,
            distance = 80;

        setInterval(() => {
            let step = innerText.childElementCount;
            innerText.style.transform = `translateY(-${distance * i}px)`;
            innerText.style.transition = "0.5s ease-in-out";

            if(i == step) {
                innerText.style.transition = "0s";
                innerText.style.transform = `translateY(0px)`;
            }

            i = (i < step) ? (i + 1) : 1;
        }, speed)
    });
}

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },  
    pagination: {
      el: ".swiper-pagination",
    },
});

const careerButton = document.querySelector('.career-btn1');
const achievementButton = document.querySelector('.career-btn2');
const container = document.getElementById('container-wrapper')
const timeline = document.querySelector('.timeline-container');
const achievements = document.querySelector('.achievement-container');

careerButton.addEventListener('click', () => {
    timeline.classList.toggle('clicked');
    achievements.classList.remove('clicked');
    container.classList.toggle('timelineExpanded');
    container.classList.remove('achievementExpanded');
})

achievementButton.addEventListener('click', () => {
    achievements.classList.toggle('clicked');
    timeline.classList.remove('clicked');
    container.classList.toggle('achievementExpanded');
    container.classList.remove('timelineExpanded');
})


//ANIMATE ON SCROLL INITIALIZE
AOS.init();


//SCROLLREVEAL.JS (Using it only for section title)
ScrollReveal({
    reset: true,
    duration: 1500,
    distance: '80px'
})

ScrollReveal().reveal('.member-content', {origin: 'top', delay: 100});
ScrollReveal().reveal('.member-subtitle', {origin: 'left', delay: 700});
ScrollReveal().reveal('.wrapper', {origin: 'top', delay: 100});
ScrollReveal().reveal('.sub-title', {origin: 'top', delay: 500});
ScrollReveal().reveal('.career-subtitle', {origin: 'left', duration: 1000});
ScrollReveal().reveal('.card-box', {origin: 'top', interval: 200, duration: 1000})

