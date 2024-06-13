import React, { useState } from "react";
import { QueryBox } from "./components/QueryBox.js";
import { Results } from "./components/Results.js";
import { theme } from "./themes/Theme.js";

function App() {
  const style = {
    backgroundColor: theme.base00,
    color: theme.base07,
    minHeight: "100vh",
    padding: "50px 20px 20px 20px",
    boxSizing: "border-box",
  };

  const [results, setResults] = useState([]);
  return (
    <div style={style}>
      <QueryBox setResults={setResults} />
      <Results results={results} />
    </div>
  );
}

export default App;
