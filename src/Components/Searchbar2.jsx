import React, { useState } from "react";
import axios from "axios";

export default function Searchbar2() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // your API logic here

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://cdn.contentful.com/spaces/bicmbwrww2bh/entries?access_token=tNiGC3b1I64hpUi6pqo6CLuLcn-kJGF_l2RFE3NYDqk`
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
