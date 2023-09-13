import Carousel from "react-bootstrap/Carousel";

export default function Slideshow({posts, imgs}) {

	return (
		<Carousel>
			{posts.map((post) => (
				<Carousel.Item key={post.id}>
					<img src={imgs.Asset.fields.file.url} />
					<Carousel.Caption>
						<h3>{post.fields.heading.slice(0, 50)}</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
}
