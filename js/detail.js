let main_navbar = document.querySelector('.main-navbar');
let carWrapper = document.querySelector('#carWrapper');
let sliders = carWrapper.querySelectorAll('.car-slide-3d');
let prev = document.querySelector('.slide-3d-prev');
let next = document.querySelector('.slide-3d-next');
let button_tab = document.querySelectorAll('.btn-tab-opener');
let tab_content = document.querySelectorAll('.tab-content');
let safety_images = document.querySelectorAll('.safety-image');
let safety_image_changer = document.querySelectorAll('.safety-image-changer');
let safety_divider = document.querySelectorAll('.divider-safety');
let design_images = document.querySelectorAll('.design-image');
let design_image_changer = document.querySelectorAll('.design-image-changer');
let design_divider = document.querySelectorAll('.divider-design');
let comfort_images = document.querySelectorAll('.comfort-image');
let comfort_image_changer = document.querySelectorAll('.comfort-image-changer');
let comfort_divider = document.querySelectorAll('.divider-comfort');
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

const detail_slider_safety = new Swiper('.detail-slider-safety', {
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

const detail_slider_comfort = new Swiper('.detail-slider-comfort', {
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

button_tab.forEach(e => {
    e.addEventListener('click', (event) => {
        tab_content.forEach(tab_e => {
            if (event.target.attributes['data-bs-target'].nodeValue == tab_e.attributes['id'].nodeValue) {
                tab_e.classList.add('active-info-tab');
            }
            else {
                tab_e.classList.remove('active-info-tab');
            }
        })
    })
});



// for design

design_image_changer.forEach(e => {
    e.addEventListener('click', (event) => {
        design_images.forEach(img_e => {
            if (event.target.attributes['data-bs-target'].nodeValue == img_e.attributes['data-bs-target'].nodeValue) {
                design_divider.forEach(event_safety => {
                    event_safety.classList.remove('divider-active');
                })
                let active_show = event.target.parentElement.querySelector('div');
                active_show.classList.add('divider-active')
                img_e.classList.remove('d-none');
            }
            else {
                img_e.classList.add('d-none');
            }
        })
    })
});

// for safety

safety_image_changer.forEach(e => {
    e.addEventListener('click', (event) => {
        safety_images.forEach(img_e => {
            if (event.target.attributes['data-bs-target'].nodeValue == img_e.attributes['data-bs-target'].nodeValue) {
                safety_divider.forEach(event_safety => {
                    event_safety.classList.remove('divider-active');
                })
                let active_show = event.target.parentElement.querySelector('div');
                active_show.classList.add('divider-active')
                img_e.classList.remove('d-none');
            }
            else {
                img_e.classList.add('d-none');
            }
        })
    })
});

// for comfort

comfort_image_changer.forEach(e => {
    e.addEventListener('click', (event) => {
        comfort_images.forEach(img_e => {
            if (event.target.attributes['data-bs-target'].nodeValue == img_e.attributes['data-bs-target'].nodeValue) {
                comfort_divider.forEach(event_safety => {
                    event_safety.classList.remove('divider-active');
                })
                let active_show = event.target.parentElement.querySelector('div');
                active_show.classList.add('divider-active')
                img_e.classList.remove('d-none');
            }
            else {
                img_e.classList.add('d-none');
            }
        })
    })
});


// body scrolling

let design = document.querySelector('#design');
let dynamic = document.querySelector('#dynamics');
let safety = document.querySelector('#safety');
let comfort = document.querySelector('#comfort');
let bluelink = document.querySelector('#bluelink');
// navs
let design_nav = document.querySelector('#design_nav');
let dynamic_nav = document.querySelector('#dynamic_nav');
let safety_nav = document.querySelector('#safety_nav');
let comfort_nav = document.querySelector('#comfort_nav');
let bluelink_nav = document.querySelector('#bluelink_nav');


document.addEventListener('scroll', (e) => {
    let win = window.pageYOffset
    let des = design.offsetTop
    
    let dyn = dynamic.offsetTop
    
    let saf = safety.offsetTop
    
    let com = comfort.offsetTop

    let blue = bluelink.offsetTop

    if (win > des && win < dyn) {
        design_nav.classList.add('active')
    }
    else {
        design_nav.classList.remove('active');
    }
    if (win > dyn && win < saf) {
        dynamic_nav.classList.add('active');
    }
    else {
        dynamic_nav.classList.remove('active');
    }
    if (win > saf && win < com) {
        safety_nav.classList.add('active');
    }
    else {
        safety_nav.classList.remove('active');
    }
    if (win > com && win < blue) {
        comfort_nav.classList.add('active');
    }
    else {
        comfort_nav.classList.remove('active');
    }
    if (win > blue) {
        bluelink_nav.classList.add('active')
    }
    else {
        bluelink_nav.classList.remove('active');
    }

});
