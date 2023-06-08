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

    circle();
})


// sec2

const circularProgress = document.querySelectorAll(".circular-progress");
const progressValue = document.querySelectorAll(".progress-value");
//parseInt(progressValue.innerHTML); 
let progressStartValue = [], progressEndValue = [];
const speed = 10;
let progress_color = "rgba(73, 175, 231, 0.777)";

for(var i=0;i<progressValue.length;i++){
    var value = parseInt(progressValue[i].innerHTML);
    progressEndValue.push(value);
    progressStartValue.push(0);
}

console.log("Hello1");
for(var ii = 0; ii < 5; ii++){
    setTimeout(() => console.log("Hello", ii), 1000)
}

let MAX_Progress_Value = -1;
for(var i = 0; i<progressEndValue.length; i++){
    MAX_Progress_Value = Math.max(progressEndValue[i], MAX_Progress_Value);
}

circle();

function circle() {

    for(var i = 0; i < progressStartValue.length; i++){
        progressStartValue[i] = 0;
    }

    progress = setInterval(() => {
        for(var i = 0; i < progressStartValue.length; i++){
            if(progressStartValue[i] < progressEndValue[i]){
                progressStartValue[i]++;
            }            
            progressValue[i].textContent = `${progressStartValue[i]}%`;
            circularProgress[i].style.background = `conic-gradient(${progress_color} ${progressStartValue[i] * 3.6}deg, #ededed 0deg)`;
            
            if(progressStartValue[i] >= progressEndValue[i] && progressEndValue[i] == MAX_Progress_Value){
                clearInterval(progress);
            }
        }
    }, speed); 

    return;
} 