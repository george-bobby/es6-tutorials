class Rectangle {
	width = 10;
	height = 10;
	// constructor() {
	// 	this.width = 5;
	// 	this.height = 5;
	// 	console.log("Rect created");
	// 	console.log(`area is ${this.width * this.height}`);
	// }
	constructor(a, b) {
		this.width = a;
		this.height = b;
		console.log("Rect created");
		console.log(`area is ${this.width * this.height}`);
	}
}

let r1 = new Rectangle(5, 2);
console.log(r1);

console.log("\n");

//extends
class newShape extends Rectangle {
	constructor(a, b, c, d) {
		super(a, b);
		this.length = c;
		this.breadth = d;
		console.log("New shape created");
		console.log(`perimeter is ${this.length + this.breadth}`);
	}
}
const n1 = new newShape(2, 30, 3, 4);
console.log(n1);
