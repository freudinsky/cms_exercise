import { getSinglePost } from "../serivces/contentCall";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

export default function Blogpost() {
	const [post, setPost] = useState([]);
	const { blogId } = useParams();

	const renderPostText = (text) => {
		return text.split("\n").map((line, index) => (
			<p key={index} className="post-p">
				{line}
			</p>
		));
	};

	useEffect(() => {
		async function fetchPost(id) {
			try {
				const singlePost = await getSinglePost(id);
				setPost(singlePost);
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
						<h2 className="post-heading">{post[0].postTitle}</h2>
					</div>
					<img className="post-img" src={post[0].postImg} alt="Post Image" />
					<div className="post-wrap">
						<p key={crypto.randomUUID()} className="post-p">
							{renderPostText(post[0].postText)}
						</p>
					</div>
				</>
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
		</>
	);
}
