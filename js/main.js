'use strict';

const menuBtn = document.querySelector('.menu-btn');
const menuCloseBtn = document.querySelector('.menu-close');
const menuOverlay = document.querySelector('.nav-overlay');
const cartOverlay = document.querySelector('.cart-overlay');
const cartBtn = document.querySelector('.cart-wrapper');
const cartClose = document.querySelector('.cart-close');

const menuCloseFunc = function () {
    menuOverlay.classList.add('show');
}

const cartCloseFunc = function () {
    cartOverlay.classList.add('show');
}

menuBtn.addEventListener('click', menuCloseFunc);
cartBtn.addEventListener('click', cartCloseFunc);

menuCloseBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('show');
});

cartClose.addEventListener('click', () => {
    cartOverlay.classList.remove('show');
});

window.onscroll = () => {
    if (window.scrollY > 100) {
        document.querySelector('.navbar-wrapper').classList.add('scrollOn');
        document.querySelector('.navbar-wrapper').style.backgroundColor = 'rgba(255, 255, 255)';
        document.querySelector('.navbar-wrapper').style.willChange = 'background';
        document.querySelector('.header-logo').style.transform = 'scale(0.1)';
        document.querySelector('.header-logo').style.opacity = '0';
    } else {
        document.querySelector('.navbar-wrapper').classList.remove('scrollOn');
        document.querySelector('.navbar-wrapper').style.backgroundColor = 'rgba(255, 255, 255, 0)';
        document.querySelector('.header-logo').style.transform = 'none';
        document.querySelector('.header-logo').style.opacity = '1';
    }
}