import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Overview from "./Components/Overview";
import Blogpost from "./Components/Blogpost";
import SearchResults from "./Components/SearchResults";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
		<>
			<Navbar />
			<div className="appwrap">
				<Routes>
					<Route path="/" element={<Overview />} />
					<Route path="/search" element={<SearchResults />} />
					<Route path="/post/:blogId" element={<Blogpost />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
