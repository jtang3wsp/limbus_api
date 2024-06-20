import React, { useState } from "react";
import styled from "styled-components";
// import { QueryBox } from "./components/QueryBox.js";
import { Filters } from "./components/Filters.js";
import { Results } from "./components/Results.js";
import { theme } from "./themes/Theme.js";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 100vh;
  padding: 50px 20px 20px 0px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  padding: 50px 0px 10px;
  background-color: ${(props) => props.backgroundColor};
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  padding: 150px 0px 100px 20px;
  background-color: ${(props) => props.backgroundColor};
`;

function App() {
  const [results, setResults] = useState([]);
  return (
    <AppContainer backgroundColor={theme.base00} color={theme.base07}>
      <Header backgroundColor={theme.base01}>
        <Filters setResults={setResults} />
      </Header>
      <Body>
        {/* <QueryBox setResults={setResults} /> */}
        <Results results={results} />
      </Body>
    </AppContainer>
  );
}

export default App;
