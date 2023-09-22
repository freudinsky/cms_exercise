import React from "react";
import Navigation from "./Navigation";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
		<>
			<header className="header">
				<div className="nav-wrap">
					<div className="col-md-6 col-12">
						<Navigation />
					</div>

					<div className="col-md-6 col-12">
						<Searchbar />
					</div>
				</div>
			</header>
		</>
	);
}
