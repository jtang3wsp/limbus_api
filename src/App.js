import React, { useState } from "react";
import "./App.css";
import { QueryBox } from "./components/QueryBox.js";
import { Results } from "./components/Results.js";

function App() {
  const [results, setResults] = useState([]);
  return (
    <div>
      <QueryBox setResults={setResults} />
      <Results results={results} />
    </div>
  );
}

export default App;
