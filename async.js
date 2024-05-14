//old way
console.log("start");
function getData(data, callback) {
	setTimeout(() => {
		console.log("reading from the database");
		callback({ data: data });
	}, 2000);
}
getData(5, function (data) {
	console.log(data);
});
console.log("finish");

//es6
const prom = new Promise((resolve, reject) => {
	setTimeout(() => resolve({ name: "Geo", age: 12 }), 2000);
	setTimeout(() => reject(new Error("Smthng went wrong")), 2000);
});

prom.then((data) => console.log(data));
prom.then((data) => console.log(data)).then(() =>
	console.log("some text here")
);

const prom2 = new Promise((resolve, reject) => {
	// setTimeout(() => resolve({ name: "Geo", age: 12 }), 2000);
	setTimeout(() => reject(new Error("Smthng went wrong")), 2000);
});
prom2.then((data) => console.log(data)).catch((err) => console.log(err));
