document.getElementById("border").style.borderWidth = ((window.innerHeight * .03) / 2) + "px";  

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = (window.innerWidth - window.innerHeight * .03) -5;
canvas.height = (window.innerHeight * .97) - 5;