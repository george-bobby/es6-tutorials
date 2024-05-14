const posts = [
	{ title: "post 1", content: "this are contents of post one" },
	{ title: "post 2", content: "this are contents of post two" },
	{ title: "post 3", content: "this are contents of post three" },
];

// console.log(posts);

function getPosts() {
	setTimeout(() => {
		let output = "";
		posts.forEach((post) => {
			output += `${post.title} `;
		});
		console.log(output);
	}, 1000);
}

getPosts();

function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post);
			const error = false;
			// const error = true;
			if (!error) {
				resolve();
			} else {
				reject("somthing went wrong");
			}
		}, 2000);
	});
}

createPost({ title: "post 4", content: "this are contents o fpost four" })
	.then(getPosts)
	.catch((err) => console.log(err));

const myPromise1 = new Promise((resolve, reject) => {
	setTimeout(resolve, 2000, "King");
});

const myPromise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, "Queen");
});

function myDisplay(some) {
	console.log(some);
}

Promise.all([myPromise1, myPromise2]).then((x) => {
	myDisplay(x);
});
