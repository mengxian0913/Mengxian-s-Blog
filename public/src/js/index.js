const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const nav2_container = document.querySelector('.nav2-container');
const arrow = document.querySelector('.arrow');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('is-active');
    nav2_container.classList.toggle('is-active');
})

arrow.addEventListener('click', function(){
    const scrollToPosition = window.innerHeight * 91 / 100;
    window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
    });

    progressStartValue = 0;
    circle();
})


// sec2

const circularProgress = document.querySelector(".circular-progress");
const progressValue = document.querySelector(".progress-value");
//parseInt(progressValue.innerHTML); 
let progressStartValue = 0, progressEndValue = 70;
const speed = 10;
let progress_color = "rgba(73, 175, 231, 0.777)";


function circle() {

    progress = setInterval(() => {
        progressStartValue++;
        
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(${progress_color} ${progressStartValue * 3.6}deg, #ededed 0deg)`;
        if(progressStartValue == progressEndValue){
            clearInterval(progress);
        }
    
    
    }, speed); 

    return;
} 