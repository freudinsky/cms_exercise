import React from "react";
import { useState } from "react";
import { getPosts } from "../serivces/contentCall";

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    films.filter((film) => {
      return film.name.match(searchInput);
    });
  }

  return (
    <>
      <div className="searchWindow">
        <input
          id="search"
          type="text"
          placeholder=" &#128270; Search"
          onChange={handleSearch}
          value={searchInput}
        />
      </div>
    </>
  );
};
export default Searchbar;
