import React from "react";
import Navigation from "./Navigation";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <>
      <header className="header">
        <div className="nav-wrap">
          <div className="col-6">
            <Navigation />
          </div>

          <div className="col-6">
            <Searchbar />
          </div>
        </div>
      </header>
    </>
  );
}
