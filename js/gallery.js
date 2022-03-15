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

let menutoggle = document.querySelector('.toggle');

menutoggle.addEventListener('click', (e) => {
    menutoggle.classList.toggle('active');
    mobile_responsive_navbar.classList.toggle('mobile-nav-active');
});

// intialaize swiper js

var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    thumbs: {
      swiper: swiper,
    },
  });

