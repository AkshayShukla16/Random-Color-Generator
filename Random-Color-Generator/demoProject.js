

const btn =document.querySelector("button");
const bd= document.body;
const newtext= document.querySelector(".current-color");

function colorGenerator(){
    const red= Math.floor(Math.random()*256);
    const green= Math.floor(Math.random()*256);
    const blue= Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`;
}

btn.addEventListener("click", ()=>{
    const randomColor= colorGenerator();
    console.log(randomColor);
    newtext.textContent= randomColor;
    bd.style.backgroundColor= randomColor;

})