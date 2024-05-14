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

async function init() {
	await createPost({
		title: "post 4",
		content: "this are contents o fpost four",
	});
	getPosts();
}

init();

//fetch w/ await
async function fetchUsers() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();
	console.log(data);
}
fetchUsers();
