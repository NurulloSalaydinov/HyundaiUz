AOS.init();

let navbar = document.getElementById('navbar');
let mobile_responsive_navbar = document.querySelector('.navbar-header-links');
let showroom_models = document.querySelectorAll('.showroom-models');

navbar_scroll = [0]

window.addEventListener('scroll', () => {
    navbar_scroll.push(window.scrollY)
    navbar_scroll_item = navbar_scroll[navbar_scroll.length - 2]
    if (window.scrollY > 200) {
        for (var i = 0; i < showroom_models.length; i++) {
            showroom_models[i].classList.add('showroom-scrolled');
        }
        if (navbar_scroll_item > window.scrollY) {
            navbar.classList.add('navbar-header-fixed');
            if ('mobile-nav-active' == mobile_responsive_navbar.className) {
                mobile_responsive_navbar.classList.remove('mobile-nav-active');
            }
        }
        else {
            navbar.classList.remove('navbar-header-fixed');
            if ('mobile-nav-active' == mobile_responsive_navbar.className) {
                mobile_responsive_navbar.classList.remove('mobile-nav-active');
            }
        }
    }
    else {
        navbar.classList.remove('navbar-header-fixed');
        for (var i = 0; i < showroom_models.length; i++) {
            showroom_models[i].classList.remove('showroom-scrolled');
        }
    }
})



function showroom_opener(e) {
    e.parentElement.querySelector('.showroom-models').classList.toggle('showroom-active');
    e.parentElement.querySelector('.animation-icon').classList.toggle('animation-active');
}

var menu = ['TUCSON', 'SOLARIS', 'ELANTRA', 'SONATA', 'STARIA']

const mySwiper = new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 1,
    effect: 'creative',
    // cssMode: true,
    creativeEffect: {
        prev: {
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
}).mount();


// car slide main swiper

const carSwiper = new Swiper('.carSwiper', {
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
}).mount();

const motorstudioSwiper = new Swiper('.motorstudio-swiper', {
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
}).mount();




let menutoggle = document.querySelector('.toggle');

menutoggle.addEventListener('click', (e) => {
    menutoggle.classList.toggle('active');
    mobile_responsive_navbar.classList.toggle('mobile-nav-active');
});