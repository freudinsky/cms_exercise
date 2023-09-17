import { getSinglePost } from "../serivces/contentCall";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Blogpost() {
	const [post, setPost] = useState([]);
	const { blogId } = useParams();

	useEffect(() => {
		async function fetchPost(id) {
			try {
				const singlePost = await getSinglePost(id);
				console.log("Fetched post:", singlePost); // Debugging: Log the fetched post
				setPost(singlePost.items);
			} catch (err) {
				console.log("Error fetching post", err);
			}
		}
		fetchPost(blogId);
	}, []);

  console.log("deine mudda",post)

	return (
		<>
			{post && post.length > 0 ? (
				<div>
					<h2>{post[0].fields.heading}</h2>
					<img src={post[0].fields.imgUrl} alt="Post Image" />
					<div> {post[0].fields.postText.content.map((p)=><p key={crypto.randomUUID()}>{p.content[0].value}</p>)} </div>
				</div>
			) : (
				" "
			)}
		</>
	);
}
