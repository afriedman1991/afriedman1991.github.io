const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
import spaceshipImage from './assets/images/spaceship.png';

// Get header element height
const headerHeight = document.querySelector('header').offsetHeight;

// Set canvas width and height
canvas.width = innerWidth;
canvas.height = innerHeight - headerHeight;

class Player {
	constructor() {		
		this.velocity = {
			x: 0,
			y: 0
		}

		this.rotation = 0;

		const image = new Image();
		image.src = spaceshipImage;
		image.onload = () => {
			const scale = 0.15;
			this.image = image;
			this.width = image.width * scale;
			this.height = image.height * scale;
			this.position = {
				x: canvas.width/2 - this.width / 2,
				y: canvas.height - this.height - 20
			}
		}
	}

	draw() {
		// c.fillStyle = 'red';
		// c.fillRect(this.position.x, this.position.y, this.width, this.height);
		c.save();
		c.translate(
			player.position.x + player.width / 5,
			player.position.y + player.height / 5
		);
		c.rotate(this.rotation);

		c.translate(
			-player.position.x + player.width / 5,
			-player.position.y + player.height / 5
		);

		c.drawImage(
			this.image,
			this.position.x,
			this.position.y,
			this.width,
			this.height
		);

		c.restore();
	}

	update() {
		if (this.image) {
			this.draw();
			this.position.x += this.velocity.x;
		}
	}
}

const player = new Player();
const keys = {
	a: {
		pressed: false
	},
	d: {
		pressed: false
	},
	space: {
		pressed: false
	}
}

const animate = () => {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	c.fillStyle = 'black';
	c.fillRect(0, 0, canvas.width, canvas.height);
	player.update();

	if (keys.a.pressed && player.position.x > 0) {
		player.velocity.x = -5;
		player.rotation = -.15;
	} else if (keys.d.pressed && player.position.x + player.width <= canvas.width) {
		player.velocity.x = 5;
		player.rotation = .15;
	} else {
		player.velocity.x = 0;
		player.rotation = 0;
	}
}

animate();

addEventListener('keydown', ({key}) => {
	switch(key) {
		case 'a':
			console.log('left');
			keys.a.pressed = true;
			break;
		case 'd':
			console.log('right');
			keys.d.pressed = true;
			break;
		case ' ':
			console.log('space');
			break;
	}
});

addEventListener('keyup', ({key}) => {
	switch(key) {
		case 'a':
			console.log('left');
			keys.a.pressed = false;
			break;
		case 'd':
			console.log('right');
			keys.d.pressed = false;
			break;
		case ' ':
			console.log('space');
			break;
	}
});
