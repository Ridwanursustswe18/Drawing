//creating the canvas variable
//Setting the canvas's size to the size of the screen
let canvas = document.getElementById("canvas")
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// ctx is the context of our canvas
// we use ctx to draw on the canvas
const ctx = canvas.getContext("2d");
/* lets create a rectangle for testing purposes
ctx.fillStyle = "red";
ctx.fillRect(100, 100, 100, 100);
*/
//previous mouse positons
let prevX = null;

let prevY = null;
//lines width

function myFunction() {
    let tokenAmount = document.getElementById("numberInput").value;
    ctx.lineWidth = tokenAmount;
    return ctx.lineWidth;
  }

let draw = false;
//Selecting all the div that has a class clr
let clrs = document.querySelectorAll(".clr");

//converting nodeList to array
clrs = Array.from(clrs);
clrs.forEach(function(clear){
    clear.addEventListener("click", function(){
        ctx.strokeStyle = clear.dataset.clear;
    });
});

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click",function(){
    //clearing the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
});

//saving the images
let saveBtn = document.querySelector(".save");
saveBtn.addEventListener("click",function(){
    let data = canvas.toDataURL("imag/png");
    let a = document.createElement("a");
    a.href = data;
    a.download = "sketch.png";
    a.click();
});
//eraser functionality


//Set draw to true when mouse is pressed
window.addEventListener("mousedown",function(e){
    draw = true;
    });
    
    window.addEventListener("mouseup",function(e){
        draw = false;
        });
//now using mousemove to know whenever moves his mouse

window.addEventListener("mousemove",function(e){

if(prevX === null || prevY === null || !draw ){
    //if draw is false then don't draw
    prevX = e.clientX;
    prevY = e.clientY;
    return
}

let currentX = e.clientX; // Gets Mouse X
let  currentY= e.clientY; // Gets Mouse Y

// Drawing a line from the previous mouse position to the current mouse position
ctx.beginPath();
ctx.moveTo(prevX,prevY);
ctx.lineTo(currentX,currentY);
ctx.stroke();

//updating the positions
prevX = currentX
prevY = currentY;
});
//changing colors through a button
function colorPicker(){
    let color = document.getElementById("color-picker").value;
    ctx.strokeStyle = color;
    return ctx.strokeStyle;
}
//eraser functionality
eraser.addEventListener("click",function(){
    ctx.strokeStyle = "#FFFFFF";
})