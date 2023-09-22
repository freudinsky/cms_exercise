import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { limitWords } from "../serivces/service";

export default function Slideshow({ posts }) {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};
	const postArr = posts.slice(0, 3);

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} className="slider">
			{postArr.map((post) => (
				<Carousel.Item key={post.postID} className="carousel-item">
					<Link to={`/post/${post.postID}`}>
						<img className="carousel-img" src={post.postImg} />
						<Carousel.Caption className="carousel-caption">
							<div className="car-cap">
								<h3>{limitWords(post.postTitle, 15)}</h3>
								<p>{limitWords(post.postText, 30)}</p>
							</div>
						</Carousel.Caption>
					</Link>
				</Carousel.Item>
			))}
		</Carousel>
	);
}
