let mobile_responsive_navbar = document.querySelector('.navbar-header-links');
let inputs = document.querySelectorAll('input');

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
    label = e.target.offsetParent.querySelector('label');
    label.classList.add('active-label');
});

document.querySelector('#phone').addEventListener('mouseout', (e) => {
    label = e.target.offsetParent.querySelector('label');
    label.classList.remove('active-label');
});



function click_input(e) {
    label = e.parentElement.querySelector('label');
    label.classList.add('clicked-active-label');
};

function blur_input(e) {
    label = e.parentElement.querySelector('label');
    label.classList.remove('clicked-active-label');
};

inputs.forEach(e => {
    e.addEventListener('keydown', (e) => {
        if (e.target.value != '') {
            label = e.target.offsetParent.querySelector('label');
            label.classList.add('full-active-label'); 
        }
        else {
            label = e.target.offsetParent.querySelector('label');
            label.classList.remove('full-active-label'); 
        }
        if (e.keyCode == 8) {
            if (e.target.value != '') {
                label = e.target.offsetParent.querySelector('label');
                label.classList.add('full-active-label'); 
            }
            else {
                label = e.target.offsetParent.querySelector('label');
                label.classList.remove('full-active-label'); 
            }
            // console.log('backspace');
            // console.log(e.target.value)
        }
    })
});