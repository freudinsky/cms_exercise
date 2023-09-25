import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const nav = useNavigate()

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };

  function handleSearch(e){
    e.preventDefault();
    nav(`/search?query=${encodeURIComponent(searchInput)}`);
  }

  return (
		<>
			<div className="searchWindow">
				<form onSubmit={handleSearch}>
					<input
						id="search"
						type="text"
						placeholder=" &#128270; Search"
						onChange={handleInput}
						value={searchInput}
					/>
				</form>
			</div>
		</>
	);
};
export default Searchbar;
