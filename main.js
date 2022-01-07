
let color = ["#F1f5f8","#F15025","Red","#F15025","#F15025","#857ac8","Green"];

let span = document.querySelector(".hexColor");

let btn = document.querySelector(".btn");

btn.addEventListener("click" , ()=>{

    let randomColor = getRandomNumber();
    document.body.style.backgroundColor = randomColor;
    span.textContent =  randomColor;
});

function getRandomNumber(){
    return color[Math.floor(Math.random()* color.length)];
}