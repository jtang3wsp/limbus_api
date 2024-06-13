import React, { useState } from "react";
import { theme } from "../themes/Theme.js";

export const QueryBox = ({ setResults }) => {
  const style = {
    backgroundColor: theme.base02,
    color: theme.base07,
    border: `1px solid ${theme.base03}`,
    padding: "10px 10px 10px 20px",
    borderRadius: "5px",
    outline: "none",
    fontSize: "16px",
  };

  const tooltipStyle = {
    margin: "10px 0px 20px 0px",
    color: theme.base05,
    fontSize: "14px",
  };

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
    <div>
      <input
        type="text"
        value={query}
        style={style}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div style={tooltipStyle}>
        Search 'identities/[sinner]' or 'egos/[sinner]'
      </div>
    </div>
  );
};
