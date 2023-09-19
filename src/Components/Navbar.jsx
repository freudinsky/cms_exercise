import React from "react";
import Navigation from "./Navigation";
import Searchbar2 from "./Searchbar2";

export default function Navbar() {
  return (
    <>
      <header className="header">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-6">
            <Navigation />
          </div>

          <div className="col-6">
            <Searchbar2 />
          </div>
        </div>
      </header>
    </>
  );
}
