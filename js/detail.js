let main_navbar = document.querySelector('.main-navbar');
let carWrapper = document.querySelector('#carWrapper');
let sliders = carWrapper.querySelectorAll('.car-slide-3d');
let prev = document.querySelector('.slide-3d-prev');
let next = document.querySelector('.slide-3d-next');
let index = 0;

window.addEventListener('scroll', () => {
    if (window.scrollY > 612) {
        main_navbar.classList.add('main-navbar-fixed');
    }
    else {
        main_navbar.classList.remove('main-navbar-fixed');
    }
});

function ThreeSlide() {
    prev.addEventListener('click', () => {
        NextPrev('prev');
    });
    next.addEventListener('click', () => {
        NextPrev('next');
    });
}

function NextPrev(direction) {
    if (direction === 'next') {
        index++;
        if (index == sliders.length) {
            index = 0
        }
    }
    else if (direction === 'prev') {
        if (index == 0) {
            index = sliders.length - 1
        }
        else {
            index--;
        }
    }

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].classList.remove('active');
        
    }

    sliders[index].classList.add('active');

}

// function NextPrevTransition(direction) {
//     if (direction === 'next') {
//         setTimeout(function () {
//             index++;
//             if (index == sliders.length) {
//                 index = 0
//             }
//         }, 100)
//     }
//     else if (direction === 'prev') {
//         setTimeout(function () {
//             if (index == 0) {
//                 index = sliders.length - 1
//             }
//             else {
//                 index--;
//             }
//         }, 100)
//     }

//     for (let i = 0; i < sliders.length; i++) {
//         sliders[i].classList.remove('active');
        
//     }

//     sliders[index].classList.add('active');

// }

slide3d_arr = []

carWrapper.addEventListener('drag', (e) => {
    slide3d_arr.push(e.screenX);
    slide3d_arr_item = slide3d_arr[slide3d_arr.length - 2]
    if (slide3d_arr_item > e.screenX) {
        setInterval(NextPrev('next'), 1700)
    }
    else if (slide3d_arr_item < e.screenX) {
        setInterval(NextPrev('prev'), 1700)
    }
}, false);

ThreeSlide();

let mobile_responsive_navbar = document.querySelector('.navbar-header-links');
let menutoggle = document.querySelector('.toggle');

menutoggle.addEventListener('click', (e) => {
    menutoggle.classList.toggle('active');
    mobile_responsive_navbar.classList.toggle('mobile-nav-active');
});

function showroom_opener(e) {
    e.parentElement.querySelector('.showroom-models').classList.toggle('showroom-active');
    e.parentElement.querySelector('.animation-icon').classList.toggle('animation-active');
}

const detail_slider = new Swiper('.detail-slider', {
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

