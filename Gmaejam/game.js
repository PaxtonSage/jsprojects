
addEventListener('blur', function() {game.paused = true});
let game = {
	paused: false,
	end: function() {
		this.paused = true;
		 
	}
}

let popup = {
	start: function(state) {
		if (state == open) {

		} else if (state == close) {

		}
	},

	death: function() {

	},

	pause: function() {

	}
}


function mezcant() {
	c.beginPath();
	c.rect(2, 2, cw - 4, ch - 4);
	c.strokeStyle = white;
	c.stroke();
	c.closePath();
}

function update() {
	if (document.hasFocus() && game.paused == false) {
		c.clearRect(0, 0, cw, ch);
		bullets.forEach(function(bullet) {bullet.update();})
		enemies.forEach(function(enemy) {enemy.update();})
		player.update();
		mezcant()
	}
	requestAnimationFrame(update);
}

window.onload = () => {
	console.log('Online :)');
    requestAnimationFrame(update);
	spawnEnemies();
	var shootDelay = setInterval(function(){player.shootDelay -= 1}, 1000/player.shootSpeed);
}