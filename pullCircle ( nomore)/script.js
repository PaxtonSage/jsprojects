const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const cw = canvas.width;
const ch = canvas.height;

const colors = [
    'AliceBlue',
    'AntiqueWhite',
    'Aqua',
    'Aquamarine',
    'Azure',
    'Beige',
    'Bisque',
    'Black',
    'BlanchedAlmond',
    'Blue',
    'BlueViolet',
    'Brown',
    'BurlyWood',
    'CadetBlue',
    'Chartreuse',
    'Chocolate',
    'Coral',
    'CornflowerBlue',
    'Cornsilk',
    'Crimson',
    'Cyan',
    'DarkBlue',
    'DarkCyan',
    'DarkGoldenRod',
    'DarkGray',
    'DarkGreen',
    'DarkKhaki',
    'DarkMagenta',
    'DarkOliveGreen',
    'DarkOrange',
    'DarkOrchid',
    'DarkRed',
    'DarkSalmon',
    'DarkSeaGreen',
    'DarkSlateBlue',
    'DarkSlateGray',
    'DarkTurquoise',
    'DarkViolet',
    'DeepPink',
    'DeepSkyBlue',
    'DimGray',
    'DodgerBlue',
    'FireBrick',
    'FloralWhite',
    'ForestGreen',
    'Fuchsia',
    'Gainsboro',
    'GhostWhite',
    'Gold',
    'GoldenRod',
    'Gray',
    'Green',
    'GreenYellow',
    'HoneyDew',
    'HotPink',
    'IndianRed',
    'Indigo',
    'Ivory',
    'Khaki',
    'Lavender',
    'LavenderBlush',
    'LawnGreen',
    'LemonChiffon',
    'LightBlue',
    'LightCoral',
    'LightCyan',
    'LightGoldenRodYellow',
    'LightGray',
    'LightGreen',
    'LightPink',
    'LightSalmon',
    'LightSeaGreen',
    'LightSkyBlue',
    'LightSlateGray',
    'LightSteelBlue',
    'LightYellow',
    'Lime',
    'LimeGreen',
    'Linen',
    'Magenta',
    'Maroon',
    'MediumAquaMarine',
    'MediumBlue',
    'MediumOrchid',
    'MediumPurple',
    'MediumSeaGreen',
    'MediumSlateBlue',
    'MediumSpringGreen',
    'MediumTurquoise',
    'MediumVioletRed',
    'MidnightBlue',
    'MintCream',
    'MistyRose',
    'Moccasin',
    'NavajoWhite',
    'Navy',
    'OldLace',
    'Olive',
    'OliveDrab',
    'Orange',
    'OrangeRed',
    'Orchid',
    'PaleGoldenRod',
    'PaleGreen',
    'PaleTurquoise',
    'PaleVioletRed',
    'PapayaWhip',
    'PeachPuff',
    'Peru',
    'Pink',
    'Plum',
    'PowderBlue',
    'Purple',
    'RebeccaPurple',
    'Red',
    'RosyBrown',
    'RoyalBlue',
    'SaddleBrown',
    'Salmon',
    'SandyBrown',
    'SeaGreen',
    'SeaShell',
    'Sienna',
    'Silver',
    'SkyBlue',
    'SlateBlue',
    'SlateGray',
    'Snow',
    'SpringGreen',
    'SteelBlue',
    'Tan',
    'Teal',
    'Thistle',
    'Tomato',
    'Turquoise',
    'Violet',
    'Wheat',
    'White',
    'WhiteSmoke',
    'Yellow',
    'YellowGreen'
];

let circles = [];
class Cirlce {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
        this.radius = radius;
        this.mass = radius*radius*Math.PI;
        this.color = color;
        this.speed = 0;

        this.draw = function() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, Math.PI * 2, 0);
            c.strokeStyle = this.color;
            c.stroke();
            c.closePath();
            c.beginPath();
            c.moveTo(this.x, this.y);
            c.lineTo(this.x + this.dx * this.radius, this.y + this.dy * this.radius);
            c.stroke();
            c.closePath();
        };

        this.update = function() {

            if (this.x < 0) {
				this.x = cw;
			}
			if (this.x > cw) {
				this.x = 0;
			}
			if (this.y < 0) {
				this.y = ch;
			}
			if (this.y > ch) {
				this.y = 0;
			}

            if (this.speed > 0) {
                this.speed -= .1;
            } else {
                this.speed = 0;
            };

            for (i of circles) {
                if (i !== this && getCollision(this, i)) {
                    displace(this, i)
                    let Tangle = Math.atan2(this.y - i.y, this.x - i.x);
                    let Hangle = Math.atan2(i.y - this.y, i.x - this.x);
                    i.dx = -Math.cos(Tangle);
                    i.dy = -Math.sin(Tangle);
                    this.dx = -Math.cos(Hangle);
                    this.dy = -Math.sin(Hangle);
                };
            };

            this.x += this.dx * this.speed;
            this.y += this.dy * this.speed;
            this.draw();
        };
    };
};

function getCollision(hunter, target) {
    let distance = Math.sqrt(Math.pow(hunter.x - target.x, 2) + Math.pow(hunter.y - target.y, 2)); //distance between two circle centers
    if (distance < hunter.radius + target.radius) {
        return true;
    };
};

function displace(hunter, target) {
    let distance = Math.sqrt(Math.pow(hunter.x - target.x, 2) + Math.pow(hunter.y - target.y, 2)); //distance between two circle centers
    let displacement = .5* (distance - hunter.radius - target.radius);

    hunter.x -= displacement * (hunter.x - target.x) / distance;
    hunter.y -= displacement * (hunter.y - target.y) / distance;

    target.x += displacement * (hunter.x - target.x) / distance;
    target.y += displacement * (hunter.y - target.y) / distance;

};


function initialize() {
    for(let i=0; i < 20; i++) {
        let radius = (Math.random() * 30) + 20;
        let x = Math.random() * (cw - radius*2) + radius;
        let y = Math.random() * (ch - radius*2) + radius;
        let color = colors[Math.round(Math.random() * (colors.length - 1))];
        circles.push(new Cirlce(x, y, radius, color));
    }
    requestAnimationFrame(update);
};
initialize();

function update() {
    c.clearRect(0, 0, cw, ch);
    for (i of circles) {
        i.update();
    }
    mouse.update();
    requestAnimationFrame(update);
};

let mouse = {
    x: 0,
    y: 0,
    radius: 5,
    selected: undefined,
    held: false,

    draw: function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, Math.PI * 2, 0);
        c.fillStyle = 'white';
        c.fill();
        c.closePath();
    },

    line: function() {
        c.beginPath();
        c.moveTo(this.selected.x, this.selected.y);
        c.lineTo(this.x, this.y);
        c.strokeStyle = 'white';
        c.stroke();
        c.closePath();
        
    },

    update: function() {
        this.draw()
        if (this.held && this.selected !== undefined) {
            this.line();
        };
    }
};

addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});
addEventListener('mousedown', function() {
    mouse.held = true;
    for (i of circles) {
        if (getCollision(mouse, i)) {
            mouse.selected = i;
        }
    };
});
addEventListener('mouseup', function() {
    mouse.held = false;

    if (mouse.selected !== undefined) {
        let angle = Math.atan2(mouse.y - mouse.selected.y, mouse.x - mouse.selected.x);
        let a = mouse.x - mouse.selected.x;
        let b = mouse.y - mouse.selected.y;
        let distance = Math.sqrt(a*a + b*b);
        mouse.selected.dx = -Math.cos(angle);
        mouse.selected.dy = -Math.sin(angle);
        mouse.selected.speed += Math.round(distance/35);

        mouse.selected = undefined;
    };
});

