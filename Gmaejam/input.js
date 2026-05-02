
// All inputs, (mouse, keyboard, the cameras that I can see you through)

let mouse = {
	x: 0,
	y: 0,
};
addEventListener('mousemove', function(e) {
	mouse.x = e.x;
	mouse.y = e.y;
})
addEventListener('mousedown', function() {
	if (game.paused == false) {
		player.shoot();
	}
});



let keys = [];
addEventListener('keydown', function(key) {
	if (!keys.includes(key.code)) {
		keys.push(key.code);
		switch (key.code) {
			case 'KeyW': player.dy = -1; break;
			case 'KeyS': player.dy = 1; break;
			case 'KeyA': player.dx = -1; break;
			case 'KeyD': player.dx = 1; break;

			case 'ShiftLeft': player.sprint = true; break;
			case 'Space': game.paused = true; break;
		}
	}
})
addEventListener('keyup', function(key) {
	switch (key.code) {
		case 'KeyW': player.dy = keys.includes('KeyS') ? 1 : 0; break;
		case 'KeyS': player.dy = keys.includes('KeyW') ? -1 : 0; break;
		case 'KeyA': player.dx = keys.includes('KeyD') ? 1 : 0; break;
		case 'KeyD': player.dx = keys.includes('KeyA') ? -1 : 0; break;

		case 'ShiftLeft': player.sprint = false; break;
		case 'Space': game.paused = false; break;
	}
	keys.splice(keys.indexOf(key.code));
})