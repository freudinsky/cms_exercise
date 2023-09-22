import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchPosts } from "../serivces/contentCall";
import PostCard from "./PostCard";
import { ColorRing } from "react-loader-spinner";

export default function SearchResults() {
	const [results, setResults] = useState();
	const { search } = useParams();

	useEffect(() => {
		async function fetchSearch(q) {
			try {
				const post = await searchPosts(q);
				setResults(post);
			} catch (e) {
				console.log("Error fetching posts", e);
			}
		}
		if (search) {
			fetchSearch(search);
		}
	}, [search]);

	return (
		<>
			<div className="card-container searchres-cont">
            <h2 className="search-heading">Search Results for "{search}":</h2>
				{results ? (
					results.map((post) => <PostCard key={post.postID} post={post} />)
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
