import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Slideshow({ posts }) {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};
	const postArr = posts.slice(0,3)

	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			{postArr.map((post) => (
				<Carousel.Item key={post.id} className="carousel-item">
					<img className="carousel-img" src={post.fields.imgUrl} />
					<Carousel.Caption>
						<h3>{post.fields.heading.slice(0, 50)}</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
}
