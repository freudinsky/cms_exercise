

export default function PostCard({post}){
	function limitWords(text, limit) {
		const words = text.split(" ");
		if (words.length > limit) {
			return words.slice(0, limit).join(" ") + "...";
		}
		return text;
	}
	const limitedHeading = limitWords(
		post.fields.heading,
		7
	);
	const limitedText = limitWords(
		post.fields.postText.content[0].content[0].value,
		20
	);

	return (
		<>

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

		</>
	);
}