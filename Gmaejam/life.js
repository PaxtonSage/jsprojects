let player = {
	x: 40,
	y: 40,
	dx: 0,
	dy: 0,
    defaultSpeed: 3,
	speed: 0,
    sprintSpeed: 5,
    shootSpeed: 7, // shots per second
    shootDelay: 1, 
	radius: 25,
    barrelWidth: 10,
    barrelHeight: 20,
	angle: 0,
    maxHealth: 100,
    health: 100,
    stamina: 100,
    fatigued: false,
    sprint: false,
    dead: false,

    shoot: function() {
        if (this.shootDelay < 1) {
            bullets.unshift(new Bullet(this.x, this.y, this.angle));
            this.shootDelay = 1;
        } else {
            console.log('delayed');
        }
    },

	draw: function() {
		c.save();
        c.strokeStyle = white;
        c.fillStyle = grey;
		c.translate(this.x, this.y);
		c.beginPath();
		c.arc(0, 0, this.radius, Math.PI * 2, 0); //main cirlce
        c.stroke();
        c.closePath();

        c.beginPath();
		c.arc(0, 0, this.radius - 1, Math.PI * 2, 0); //main cirlce
        c.fill();
        c.closePath();

        c.rotate(this.angle);
        c.beginPath();
        c.rect(this.radius - 2, -this.barrelHeight/2, this.barrelWidth, this.barrelHeight); //barrel
        c.stroke();
        c.closePath();

        c.beginPath();
        c.rect(this.radius - 4, -(this.barrelHeight - 2)/2, this.barrelWidth, this.barrelHeight - 2); // Outline cover up
        c.fill();
        c.closePath();
		c.restore();
	},

    display: function() {
        c.globalAlpha = .75;
        c.lineWidth = 2;
        if (this.dead) {
            c.fillStyle = 'lightgrey'} else {c.fillStyle = 'lightgreen'}
        c.beginPath();
        c.roundRect(cw/2 - 250, 10, this.health * 5, 20, 10);  //top Health
        c.fill();
        c.closePath(); 

        c.beginPath();
        c.roundRect(cw/2 - 250, 10, this.maxHealth * 5, 20, 10);
        c.stroke();
        c.closePath();


        if (this.fatigued || this.dead) {
            c.fillStyle = 'lightgrey'} else {c.fillStyle = 'lightskyblue';}
        c.beginPath();
        c.roundRect(cw/2 - 250, ch - 30, this.stamina * 5, 20, 10);  //bottom Stamina
        c.fill();
        c.closePath();
        c.globalAlpha = 1;
        c.lineWidth = 1;

        c.beginPath();
        c.roundRect(cw/2 - 250, ch - 30, 500, 20, 10);
        c.stroke();
        c.closePath();
    },

	update: function() {

        if (this.x + this.radius >= cw - 2) { //x colider
            this.x = cw - this.radius - 2;
        } else if (this.x - this.radius <= 2) {
            this.x = this.radius + 2;
        }

        if (this.y + this.radius >= ch - 2) { //y collison
            this.y = ch - this.radius - 2;
        } else if (this.y -this.radius <= 2) {
            this.y = this.radius + 2;
        }

        if (this.sprint && this.fatigued == false) {
            this.speed = this.sprintSpeed;
            if (this.stamina <= 3) {
                this.fatigued = true;
                this.sprint = false;
            }
            this.stamina -= .5;
        } else {
            this.speed = this.defaultSpeed;
            if (this.stamina < 100) {
                this.stamina += 0.25;
            } else {
                this.fatigued = false;
            }
        }

        enemies.forEach(function(enemy) {
            if (getCollision(player, enemy)) {
                enemy.hit(enemy.maxHealth);
                player.health -= enemy.damage;
                if (player.health <= 3) {
                    player.health = player.maxHealth;
                    player.dead = true;
                    game.end()
                }
            };
        })

		this.angle = Math.atan2(mouse.y - player.y, mouse.x - player.x);
        this.speed = Math.abs(this.dx) + Math.abs(this.dy) == 2 ? this.speed / Math.sqrt(2) : this.speed;
		this.x += this.dx * this.speed;
		this.y += this.dy * this.speed;
		this.draw();
        this.display();
	},
};

let bullets = [];
function Bullet(x, y, angle) {
    this.death = setTimeout(() => bullets.splice(bullets.indexOf(this)), 5000);
    this.x = x + Math.cos(angle) * 40;
    this.y = y + Math.sin(angle) * 40;
    this.angle = angle;
    this.speed = 13;
    this.radius = 5;
    this.color = white;
    this.damage = 10;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, Math.PI * 2, 0);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    };

    this.update = function() {
        for (enemy of enemies) {
            if (getCollision(this, enemy)) {
                clearTimeout(this.death);
                bullets.splice(bullets.indexOf(this), 1);
                enemy.hit(this.damage);
            }
        }

        this.x += Math.cos(angle) * this.speed;
        this.y += Math.sin(angle) * this.speed;
        this.draw();
    };
}

let enemies = [];
function Enemy(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = 30 / radius + 1;
    this.maxHealth = radius;
    this.health = radius;
    this.damage = radius / 3;

    this.hit = function(dmg) {
        this.health -= dmg;
        if (this.health <= 0) {
            enemies.splice(enemies.indexOf(this), 1);
        }
    }

    this.draw = function() {
        c.beginPath();
        c.strokeStyle = white;
        c.arc(this.x, this.y, this.radius, Math.PI * 2, 0);
        c.stroke();
        c.closePath();

        c.beginPath();
        c.fillStyle = grey;
        c.arc(this.x, this.y, this.radius - 1, Math.PI * 2, 0);
        c.fill();
        c.closePath();
    };

    this.update = function() {
        for (i of enemies) {
            if (i !== this && getCollision(this, i)) {
                displace(this, i);
            }
        }

        this.angle = Math.atan2(player.y - this.y, player.x - this.x);
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        this.draw();
    }
}

function spawnEnemies() {
    if (game.paused == false) {
        let x = Math.random() * (cw + 1000) - 500;
        let y = Math.random() * (ch + 1000) - 500;
        let radius = Math.random() * 35 + 15;

        if (x > 0 && x < cw && y > 0 && y < ch) {
            spawnEnemies()
            return;
        }
        
        enemies.push(new Enemy(x, y, radius));
    }
    setTimeout(spawnEnemies, 1000);
}

let orbs = [];
function Orb(x, y, count) {
    console.log(x, y, count)
}