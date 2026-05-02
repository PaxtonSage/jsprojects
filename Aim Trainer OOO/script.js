const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
canvas.width = cw = window.innerWidth;
canvas.height = ch = window.innerHeight;
addEventListener('resize', function() {
    canvas.width = cw = window.innerWidth;
    canvas.height = ch = window.innerHeight;
});

let mouse = {
    x: 0,
    y: 0,
    radius: 100,

    update: function() {
    },
};
addEventListener('mousemove', function (event) {mouse.x = event.x; mouse.y = event.y;});
addEventListener('mousedown', function () {
    for (i of targets) {
        if (getCollision(mouse, i) == true) {
            targets.splice(targets.indexOf(i), 1);
        }
    }
    spawn();
})

let newGame = {
    currentScore: 0,
    targetNumber: 0,
    targetsHit: 0,
    time: 0,
};

let curGame = {

};

let targets = [];
class Target {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;

        this.draw = function() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, Math.PI * 2, 0);
            c.fill();
            c.closePath();
        };
    };
}

function getCollision(circle1, circle2) {
    let a = circle1.x - circle2.x;
    let b = circle1.y - circle2.y;
    let distance = Math.sqrt(a*a + b*b);
    if (distance < circle1.radius + circle2.radius) {
        return true;
    } else {
        return false;
    }
}

function spawn() {
    let radius = (Math.random() * 10) + 50;
    let x = Math.random() * (cw - (radius * 2)) + radius;
    let y = Math.random() * (ch - (radius * 2)) + radius;
    targets.push(new Target(x, y, radius));
}

function popup() {
	let popupContainer = document.createElement('div');
	document.body.appendChild(popupContainer);
	popupContainer.id = 'popupContainer';
	let popup = document.createElement('div');
	popupContainer.appendChild(popup);
	popup.id = 'popup';
	let popupRestart = document.createElement('div');
	popupContainer.appendChild(popupRestart);
	popupRestart.id = 'popupRestart';
	popupRestart.innerHTML = 'Restart';
	popupRestart.setAttribute('onclick', 'game.restart()');
	let popupText = document.createElement('div');
	popup.appendChild(popupText);
	popupText.id = 'popupText';
	popupText.innerHTML = 'You Died! <br> Score: ' + game.score;
	
}

function start() {
    requestAnimationFrame(update);
}

function update() {
    c.clearRect(0, 0, cw, ch);
    mouse.update();
    for (i of targets) {
        i.draw();
    }
    requestAnimationFrame(update);
}

start();