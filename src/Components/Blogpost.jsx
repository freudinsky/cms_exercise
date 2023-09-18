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

	return (
		<>
			{post && post.length > 0 ? (
				<>
					<div className="headingwrap">
						<h2 className="post-heading">{post[0].fields.heading}</h2>
					</div>
					<img
						className="post-img"
						src={post[0].fields.imgUrl}
						alt="Post Image"
					/>
					<div className="post-wrap">
						<div className="post-text">
							{post[0].fields.postText.content.map((p) => (
								<p key={crypto.randomUUID()} className="post-p">
									{p.content[0].value}
								</p>
							))}{" "}
						</div>
					</div>
				</>
			) : (
				" "
			)}
		</>
	);
}
