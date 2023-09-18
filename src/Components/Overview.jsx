import { useEffect, useState } from "react";
import { getPosts } from "../serivces/contentCall";
import PostCard from "./PostCard";
import Slideshow from "./Slideshow";


export default function Overview() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function fetchPosts() {
			try {
				const blogposts = await getPosts();
				setPosts(blogposts);
			} catch (err) {
				console.log("Error fetching posts", err);
			}
		}
		fetchPosts();
	}, []);

	return (
		<>
			<Slideshow posts={posts} />
			<div className="card-container">
				{posts.map((post) => (
					<PostCard key={post.sys.id} post={post} />
				))}
			</div>
		</>
	);
}
