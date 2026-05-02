const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
canvas.width = cw = window.innerWidth;
canvas.height = ch = window.innerHeight;






function update() {

	requestAnimationFrame(update);
}

window.onload = () => {
	console.log('Online :)');
    requestAnimationFrame(update);
}