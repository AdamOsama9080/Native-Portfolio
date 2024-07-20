let navMenu = document.getElementById("nav_menu");
let navClose = document.getElementById("close");
let navToggle = document.getElementById("nav_toggle");

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add("show_menu");
    })
}

if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show_menu");
    })
}

let skillsContent = document.querySelectorAll(".skills-content");

skillsContent.forEach((el) => {
    el.addEventListener("click",()=>{
        el.classList.toggle('skills-close');
        el.classList.toggle('skills-open');
    });
});


let servicesContents = document.querySelectorAll(".services-content");

servicesContents.forEach(function(servicesContent){
    const serviceButton = servicesContent.querySelector(".service-botton");
    const modelClose = servicesContent.querySelector(".model-close");
    serviceButton.addEventListener("click",()=>{
        const servicesModel = servicesContent.querySelector(".services-model");
        servicesModel.classList.add("active-model");
    });
    modelClose.addEventListener("click",()=>{
        const servicesModel = servicesContent.querySelector(".services-model");
        servicesModel.classList.remove("active-model");
    });
});


let swiper = new Swiper(".portofolio-container", {
    cssMode: true,
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    mousewheel: true,
    keyboard: true,
});


let swiperTestimonial = new Swiper(".testimonial-container", {
    grabCrusor: true,
    loop:true,
    spaceBetween:48,

    pagination: {
        el: ".swiper-pagination",
        clickable:true,
        dynamicBullets:true,
    },

    breakpoints:{
        568:{
            slidesPreview:2,
        }
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section[id]');

    function setActiveLink() {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector(`.nav_menu a[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('link-active');
        } else {
            link.classList.remove('link-active');
        }
        });
    }

    window.addEventListener('scroll', setActiveLink);
});


function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80){
        nav.classList.add('scroll-header'); 
    } 
    else {
        nav.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)


function scrollUp(){
    const scrollTop = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-up class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); 
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'


// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


