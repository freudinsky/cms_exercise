import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Overview from "./Components/Overview";

function App() {
  return (
    <>
      <Navbar />
      <Overview />
      <Footer />
    </>
  );
}

export default App;
