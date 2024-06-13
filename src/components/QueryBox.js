import React, { useState } from "react";

export const QueryBox = ({ setResults }) => {
  const [query, setQuery] = useState("");

  const fetchData = async (url) => {
    console.log(`Fetching from http://localhost:3000/api/${url}`);
    const response = await fetch(`http://localhost:3000/api/${url}`);
    if (response.ok) {
      const data = await response.json();
      setResults(data);
    } else {
      setResults([]);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(query);
      fetchData(query);
    }
  };

  return (
    <input
      type="text"
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};
