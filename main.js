const myslide = document.querySelectorAll(".myslider");
const slider = document.querySelector(".slider");
const innerSlider = document.querySelector(".slider-inner");


dot = document.querySelectorAll(".dot");

let counter = 1;
slidefun(counter)

let timer = setInterval(autoslide,6000)
function autoslide(){
    counter+=1;
    slidefun(counter)
}
function plusSlides(n){
    counter+=n;
    slidefun(counter)
    resetTimer();
}
function currentSlide(n){
    counter = n
    slidefun(counter)
    resetTimer();
}
function resetTimer(){
    clearInterval(timer)
    timer = setInterval(autoslide,6000)
}
function slidefun(n){
    let i;
    for(i = 0;i < myslide.length;i++){
        myslide[i].style.display="none";
    }
    for(i = 0;i< dot.length;i++){
        dot[i].className = dot[i].className.replace("active", "")
    }
    if(n > myslide.length){
        counter = 1;
    }
    if(n < 1){
        counter = myslide.length;
    }
    myslide[counter-1].style.display = "block";
    dot[counter-1].classList.add("active")
}

let pressed = false;
let startX = 0;
let endX = 0;

let LeftToRight = false;

slider.addEventListener("mousedown", (e) => {
    startX = e.offsetX;
    slider.style.cursor = "grabbing"

})

slider.addEventListener("mouseup", (e) => {
    slider.style.cursor = "default"
    endX = e.offsetX;
    pressed = true;

})

slider.addEventListener("mousemove", (e)=>{
    if(pressed){
        isLeftToRight(startX, endX);
        slidefun(counter)
        resetTimer();
        pressed = false;

    }
})
// Phone
let Ppressed = false;
let PstartX = 0;
let PendX = 0;

slider.addEventListener("touchstart", (e) => {

    PstartX = e.changedTouches[0].screenX;

})

slider.addEventListener("touchend", (e) => {
    
    PendX = e.changedTouches[0].screenX;
    Ppressed = true


})

slider.addEventListener("touchmove", (e) => {
    if (Ppressed) {
        isLeftToRight(PstartX, PendX);
        slidefun(counter)
        resetTimer();
        Ppressed = false;

    }
})

function isLeftToRight(a,b){
    if(a-b > 0){
        LeftToRight = false;
        counter++;
    } else if (a - b < 0) {
        LeftToRight = true;
        counter--;
    }

    
}
