// DRAW BUTTERFLIES

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 1000;

//DRAW BUTTERFLY
drawButterfly(10, 10);
drawButterfly(300, 300);
drawButterfly(0, 350)
//DRAW DOTS FUNCTIONS
function drawCircle(x1, y1, size, color) {
    ctx.beginPath();
    ctx.arc(x1, y1, size, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

//DRAW BUTTERFLY FUNCTION
function drawButterfly(x, y) {
    //DRAW WINGS
    drawCircle(x + 400, y + 250, 75 , 'orange');
    drawCircle(x + 400, y + 380, 75, 'orange');
    drawCircle(x + 520, y + 250, 75, 'orange');
    drawCircle(x + 520, y + 380, 75, 'orange');

    //DRAW DOTS
    drawCircle(x + 375, y + 225, 20, 'purple');
    drawCircle(x + 420, y + 275, 20, 'purple');
    drawCircle(x + 420, y + 375, 20, 'purple');
    drawCircle(x + 375, y + 400, 20, 'purple');
    drawCircle(x + 500, y + 225, 20, 'purple');
    drawCircle(x + 520, y + 275, 20, 'purple');
    drawCircle(x + 500, y + 390, 20, 'purple');
    drawCircle(x + 550, y + 375, 20, 'purple');
    //DRAW BODY
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(x + 465, y + 430);
    ctx.lineTo(x+ 465, y + 150);
    ctx.stroke();
    //DRAW EYES
    drawCircle(x + 450, y + 150, 15, 'grey');
    drawCircle(x + 475, y + 150, 15, 'grey');
    //DRAW PUPILS
    drawCircle(x + 450, y + 150, 7, 'black');
    drawCircle(x + 475, y + 150, 7, 'black');
}