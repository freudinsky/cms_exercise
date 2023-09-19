import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
	return (
		<div className="navigation">
			<nav>
				<ul>
					<li>
						<NavLink to="/">
							<img
								className="home"
								href="https://cms-exercise.vercel.app"
								src="https://icons.iconarchive.com/icons/iconarchive/fat-sugar-food/512/Popcorn-icon.png"
								width="100"
							/>
						</NavLink>
					</li>
					<li>
						<NavLink to="/">Blog</NavLink>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
					<li>
						<a href="#newsletter">Newsletter</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
