let canvas = document.querySelector('canvas');
import { Object } from './canvas';

// Get header element height
const headerHeight = document.querySelector('header').offsetHeight;

canvas.width = window.innerWidth; // set canvas width to window width
canvas.height = window.innerHeight - headerHeight; // set canvas height to window height

let c = canvas.getContext('2d'); // c is the context

// Mouse Event
let mouse = {
	x: undefined,
	y: undefined,
}
window.addEventListener('mousemove', (event) => {
	mouse.x = event.x;
	mouse.y = event.y;
});

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init();
});

let maxRadius = 40;
let minRadius = 2;
let colors = ['#2C3E50', '#E74C3C', '#ECF0F1', '#3498DB', '#2980B9'];

// Animation
class Circle extends Object {
	constructor(x, y, dx, dy, radius) {
		super(x, y, dx, dy, radius);
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
		this.minRadius = radius;
		this.color = colors[Math.floor(Math.random() * colors.length)];
	}

	draw() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
	}

	update() {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}

		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		// interactivity
		if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
			if (this.radius < maxRadius) {
				this.radius += 1;
			}
		} else if (this.radius > minRadius) {
			this.radius -= 1;
		}

		this.draw();
	}
}



let circleArray = [];


const init = () => {
	circleArray = [];
	for (let i = 0; i < 800; i++) {
		let radius = Math.random() * 3 + 1;
		let x = Math.random() * (innerWidth - radius * 2) + radius;
		let y = Math.random() * (innerHeight - radius * 2) + radius;
		let dx = (Math.random() - 0.5);
		let dy = (Math.random() - 0.5);
		circleArray.push(new Circle(x, y, dx, dy, radius));
	}
}

const animate = () => {
	requestAnimationFrame(animate);c.beginPath();
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (let i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}

init();
animate();