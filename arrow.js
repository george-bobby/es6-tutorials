//old js
function sayAge() {
	console.log("age is something");
}

var sayName = function () {
	console.log("name is ed");
};

sayAge();
sayName();

//es6
//synatx
//const funcName = () => {statements;}
//const funcName = paremeter => statement;
//const funcName = (paremeter1, paramenter2) => {statements;}

const sayLoc = (loc) => console.log(`loc is ${loc}`);

sayLoc("india");

//default params
function multi(a, b) {
	a = a || 1;
	b = b || 1;
	console.log(a * b);
}
multi(2, 6);
multi();

//in es6
const add = (a = 1, b = 1) => console.log(a + b);
add(10, 5);
add();
