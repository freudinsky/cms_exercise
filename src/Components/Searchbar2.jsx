import { useState } from "react";

export default function Searchbar2() {
  const filmsList = document.getElementById("filmsList");
  const searchBar = document.getElementById("searchBar");
  let filmsArray = [];

  searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredFilms = filmsArray.filter((film) => {
      return film.name.toLowerCase().includes(searchString);
    });
    displayFilms(filteredFilms);
  });

  const loadFilms = async () => {
    try {
      const res = await fetch(
        `https://cdn.contentful.com/spaces/bicmbwrww2bh/entries?access_token=tNiGC3b1I64hpUi6pqo6CLuLcn-kJGF_l2RFE3NYDqk`
      );
      filmsArray = await res.json();
      displayFilms(filmsArray);
    } catch (err) {
      console.error(err);
    }
  };

  const displayFilms = (films) => {
    const htmlString = films
      .map((film) => {
        return `
             <li class="film">
                <h2>${film.name}</h2>
                 <p>House: ${character.house}</p>
                 <img src="${character.image}"></img>
             </li>
         `;
      })
      .join("");
    filmsArray.innerHTML = htmlString;
  };

  loadFilms();

  return (
    <>
      <div className="searchWindow">
        <div id="searchWrapper">
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="&#128270; Search"
          />
        </div>
        <ul id="filmsList"></ul>
      </div>
    </>
  );
}
