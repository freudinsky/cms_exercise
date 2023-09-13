import React from "react";
import Navigation from "./Navigation";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <>
      <header className="header">
        <div className="navbar-part">
          <Navigation />
        </div>
        <div className="searchbar-part">
          <Searchbar />
        </div>
      </header>
    </>
  );
}
