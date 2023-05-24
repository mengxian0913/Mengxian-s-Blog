const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const nav2_container = document.querySelector('.nav2-container');
const arrow = document.querySelector('.arrow');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('is-active');
    nav2_container.classList.toggle('is-active');
})

arrow.addEventListener('click', function(){
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
})