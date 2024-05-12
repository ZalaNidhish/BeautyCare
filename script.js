const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");
const ball = document.querySelector(".ball");
const darkMode = document.querySelector(".darkMode");
const search = document.querySelector(".search");
const choices = document.querySelector(".choices");


search.addEventListener("mouseover",()=>{
    choices.style.opacity = "1";
    choices.style.top = "8vh";
    choices.style.zIndex = "9999";
})
search.addEventListener("mouseout",()=>{
    choices.style.opacity = "0";
    choices.style.top = "-20vh";
})

choices.addEventListener("click",()=>{
    choices.style.opacity = "0";
    choices.style.top = "-20vh";
})



var i = true;

toggle.addEventListener("click",()=>{
    if(i==true){
    i=false;
    body.style.backgroundColor = "black";
    body.style.color = "white";
    toggle.style.justifyContent = "flex-end";
    toggle.style.backgroundColor = "black";
    ball.style.backgroundColor = "white";
    darkMode.style.color = "white";

        
    }
    else if(i==false){
    i=true;
    body.style.backgroundColor = "white";
    body.style.color = "black";
    toggle.style.justifyContent = "flex-start";
    toggle.style.backgroundColor = "white";
    ball.style.backgroundColor = "black";
    darkMode.style.color = "black";



    

    }
    console.log(i);
}
)