import React from "react";
import { useState } from "react";

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");

  const films = [
    { name: "barbie", kinostart: "05.2023" },
    { name: "spiderman", kinostart: "12.2024" },
    { name: "winniePooh", kinostart: "11.2025" },
    { name: "batman", kinostart: "09.2002" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    films.filter((film) => {
      return film.name.match(searchInput);
    });
  }

  <input
    type="text"
    placeholder="Search"
    onChange={handleChange}
    value={searchInput}
  />;

  <div className="tabelle">
    <input
      type="text"
      placeholder="Search"
      onChange={handleChange}
      value={searchInput}
    />

    <table>
      <tr>
        <th>Titel</th>
        <th>Kinostart</th>
      </tr>

      {films.map((film, index) => {
        <tr>
          <td>{films.name}</td>
          <td>{films.kinostart}</td>
        </tr>;
      })}
    </table>
  </div>;
};

export default Searchbar;
