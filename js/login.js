let mobile_responsive_navbar = document.querySelector('.navbar-header-links');

function showroom_opener(e) {
    e.parentElement.querySelector('.showroom-models').classList.toggle('showroom-active');
    e.parentElement.querySelector('.animation-icon').classList.toggle('animation-active');
}

let menutoggle = document.querySelector('.toggle');

menutoggle.addEventListener('click', (e) => {
    menutoggle.classList.toggle('active');
    mobile_responsive_navbar.classList.toggle('mobile-nav-active');
});

$(":input").inputmask();

$("#phone").inputmask({"mask": "(99) 999-99-99"});



document.querySelector('#phone').addEventListener('mouseover', (e) => {
    // console.log(e.target.offsetParent)
    label = e.target.offsetParent.querySelector('label');
    label.classList.add('active-label');
});

document.querySelector('#phone').addEventListener('mouseout', (e) => {
    label = e.target.offsetParent.querySelector('label');
    label.classList.remove('active-label');
});

document.querySelector('#phone').addEventListener('click', (e) => {
    label = e.target.offsetParent.querySelector('label');
    label.classList.add('clicked-active-label'); 
});

document.querySelector('#phone').addEventListener('blur', (e) => {
    label = e.target.offsetParent.querySelector('label');
    label.classList.remove('clicked-active-label'); 
});

document.querySelector('#phone').addEventListener('keydown', (e) => {
    if (e.target.value != '') {
        label = e.target.offsetParent.querySelector('label');
        label.classList.add('full-active-label'); 
    }
    else {
        label = e.target.offsetParent.querySelector('label');
        label.classList.remove('full-active-label'); 
    }
});
