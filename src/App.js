import React, { useState } from "react";
// import { QueryBox } from "./components/QueryBox.js";
import { Filters } from "./components/Filters.js";
import { Results } from "./components/Results.js";
import { theme } from "./themes/Theme.js";

function App() {
  const appStyle = {
    backgroundColor: theme.base00,
    color: theme.base07,
    minHeight: "100vh",
    padding: "50px 20px 20px 20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  };

  const tabStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const [results, setResults] = useState([]);
  return (
    <div style={appStyle}>
      <div style={tabStyle}>
        <Filters setResults={setResults} />
      </div>
      {/* <QueryBox setResults={setResults} /> */}
      <Results results={results} />
    </div>
  );
}

export default App;
