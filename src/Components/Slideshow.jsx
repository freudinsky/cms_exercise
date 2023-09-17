import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Slideshow({ posts }) {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};
	const postArr = posts.slice(0, 3);

	function limitWords(text, limit) {
		const words = text.split(" ");
		if (words.length > limit) {
			return words.slice(0, limit).join(" ") + "...";
		}
		return text;
	}

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} className="slider">
			{postArr.map((post) => (
				<Carousel.Item key={post.sys.id} className="carousel-item">
					<img className="carousel-img" src={post.fields.imgUrl} />
					<Carousel.Caption className="carousel-caption">
						<h3>{limitWords(post.fields.heading, 15)}</h3>
						<p>
							{limitWords(post.fields.postText.content[0].content[0].value, 30)}
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
}
