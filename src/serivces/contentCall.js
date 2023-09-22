import axios from "axios";


export async function getPosts() {
	try {
		const res = await axios.get("https://cms-api-o0i7.onrender.com/api/");
		if (res.status === 200) {
			const posts = await res.data;
			return posts;
		} else {
			console.log("Request was not successful.");
		}
	} catch (err) {
		console.log("Error fetching data:", err);
	}
}

export async function getSinglePost(id) {
	try {
		const res = await axios.get(`https://cms-api-o0i7.onrender.com/api/post/${id}`);
		if (res.status === 200) {
			const posts = await res.data;
			return posts;
		} else {
			console.log("Request was not successful.");
		}
	} catch (err) {
		console.log("Error fetching data:", err);
	}
}

export async function searchPosts(q) {
	try {
		const res = await axios.get(
			`https://cms-api-o0i7.onrender.com/api/search?query=${q}`
		);
		if (res.status === 200) {
			const posts = await res.data;
			return posts;
		} else {
			console.log("Request was not successful.");
		}
	} catch (err) {
		console.log("Error fetching data:", err);
	}
}
