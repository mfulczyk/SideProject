
let upBtn = document.querySelector("#upBtn");
let downBtn = document.querySelector("#downBtn");
let circle = document.querySelector("#circle")
let rotateSum=0;
let rotateSum1=0;



upBtn.addEventListener("click", function(){
    rotateSum=rotateSum-90;

    circle.style.transform=`rotate( ${rotateSum}deg)`;
})

downBtn.addEventListener("click", function(){
    rotateSum=90+rotateSum;

    circle.style.transform=`rotate( ${rotateSum}deg)`;
})
