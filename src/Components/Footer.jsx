import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<>
			<div class="footer">
				<ul className="footernav">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="#">Imprint</Link>
					</li>
					<li>
						<Link to="#">Privacy note</Link>
					</li>
				</ul>
				<ul class="footer-icons">
					<li>
						<a href="#" class="fa fa-facebook" id="fb-icon"></a>
					</li>

					<li>
						<a href="#" class="fa fa-instagram" id="ig-icon"></a>
					</li>
					<li>
						<a href="#" class="fa fa-youtube-play" id="youtube-icon"></a>
					</li>
				</ul>
			</div>
		</>
	);
}
