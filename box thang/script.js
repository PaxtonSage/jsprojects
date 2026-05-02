const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
canvas.width = cw = window.innerWidth;
canvas.height = ch = window.innerHeight;
c.translate(0.5, 0.5)

window.addEventListener('resize', () => window.location.reload());

let size = 50;
let roundedX = Math.floor(cw/size);
let roundedY = Math.floor(ch/size);
let displaceX = (cw - roundedX * size) / 2;
let displaceY = (ch - roundedY * size) / 2;
console.log(roundedX, roundedY);

let mouse = {
    x: 0,
    y: 0,

    update: function() {
        for (let i=0; i < squares.length; i++) {
            let thing = squares[i];
            if (this.x > thing.x && this.x < thing.x + size && this.y > thing.y && this.y < thing.y + size) {
                thing.opacity = 100;
            }
        }
    }
   
}
window.addEventListener('mousemove', function(e) {
    mouse.x = e.x;
    mouse.y = e.y;

    console.log(mouse)
})

let squares = [];
function Square(x, y) {
    this.x = x + displaceX;
    this.y = y + displaceY;
    this.stroke = '#1e2429';
    this.fill = 'rgba(90, 71, 128)';
    this.opacity = 0;

    this.draw = function() {
        c.beginPath();
        c.rect(this.x, this.y, size, size);
        c.strokeStyle = this.stroke;
        c.globalAlpha = 1;
        c.stroke();
        c.globalAlpha = this.opacity/100;
        c.fillStyle = this.fill;
        c.fill();
        c.closePath();
    };

    this.update = function() {
        if (this.opacity > 0) {
            this.opacity -= .5;
        }

        this.draw();
    }
}

function int() {
    getSquares();

    setInterval(update, 0);
}

function getSquares() {
    for (let x=0; x < roundedX; x++) {
        for (let y=0; y < roundedY; y++) {
            squares.push(new Square(x * size, y * size));
        }
    }
}

function update() {
    c.clearRect(0, 0, cw, ch);
    mouse.update();
    for (let i = 0; i < squares.length; i++) {
        squares[i].update();
    }
}

int();