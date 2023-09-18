import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Overview from "./Components/Overview";
import Blogpost from "./Components/Blogpost"
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			{/* <Navbar /> */}
			<Routes>
			<Route path="/" element={<Overview/>} />
			<Route path="/post/:blogId" element={<Blogpost />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
