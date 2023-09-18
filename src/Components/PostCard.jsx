import { Link } from "react-router-dom";
import { limitWords } from "../serivces/service";

export default function PostCard({ post }) {
	
	const limitedHeading = limitWords(post.fields.heading, 7);
	const limitedText = limitWords(
		post.fields.postText.content[0].content[0].value,
		20
	);

	return (
		<>
			<Link to={`/post/${post.sys.id}`} className="card-link">
				<div className="card text-center">
					<img
						src={post.fields.imgUrl}
						className="card-img-top"
						alt={post.fields.heading}
					/>
					<div className="card-body">
						<h5 className="card-title">{limitedHeading}</h5>
						<p className="card-text">{limitedText}</p>
					</div>
				</div>
			</Link>
		</>
	);
}
