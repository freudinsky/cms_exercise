import { useState, useEffect } from "react";
import "./App.css";
import Searchbar from "./Components/Searchbar";
import Navbar from "./Components/Navbar";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Footer />
    </div>
  );
	return (
		<>
			{/* <Navbar /> */}
			<Overview />
			{/* <Footer /> */}
		</>
	);
}

export default App;
