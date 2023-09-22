import { useEffect, useState } from "react";
import { getPosts } from "../serivces/contentCall";
import PostCard from "./PostCard";
import Slideshow from "./Slideshow";
import { ColorRing } from "react-loader-spinner";

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
				{posts.length > 0 ? (
					posts.map((post) => <PostCard key={post.postID} post={post} />)
				) : (
					<ColorRing
						visible={true}
						height="80"
						width="80"
						ariaLabel="blocks-loading"
						wrapperStyle={{}}
						wrapperClass="blocks-wrapper"
						colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
					/>
				)}
			</div>
		</>
	);
}
