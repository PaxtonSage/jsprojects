const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
const cw = canvas.width;
const ch = canvas.height;

const white = 'white'; // fucking colours
const grey = '#2c3237'; 

function getCollision(caller, target) {
	let distance = Math.sqrt(Math.pow(caller.x - target.x, 2) + Math.pow(caller.y - target.y, 2));
	if (distance <= caller.radius + target.radius) {
		return true;
	};
}

function displace(caller, target) {
	let distance = Math.sqrt(Math.pow(caller.x - target.x, 2) + Math.pow(caller.y - target.y, 2)); //distance between two circle centers
	let displacement = .5 * (distance - caller.radius - target.radius);

	caller.x -= displacement * (caller.x - target.x) / distance;
	caller.y -= displacement * (caller.y - target.y) / distance;

	target.x += displacement * (caller.x - target.x) / distance;
	target.y += displacement * (caller.y - target.y) / distance;

};

function displayHealth(x, y, maxHealth, curHealth, radius) {  //displays health below things
	c.beginPath();
	c.rect(x - 15, y + radius + 15, 30, 5);
	c.fillStyle = 'red';
	c.fill();
	c.closePath();
	c.beginPath();
	c.rect(x - 15, y + radius + 15, curHealth / maxHealth * 30, 5);
	c.fillStyle = 'lightgreen';
	c.fill();
	c.closePath();
}