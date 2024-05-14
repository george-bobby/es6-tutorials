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

function createPost(post, callback) {
	setTimeout(() => {
		posts.push(post);
		callback();
	}, 2000);
}

createPost(
	{ title: "post 4", content: "this are contents o fpost four" },
	getPosts
);
