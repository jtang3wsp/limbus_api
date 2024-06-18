import React from "react";
import styled from "styled-components";
import { JSONTree } from "react-json-tree";
import { theme } from "../themes/Theme.js";

const ResultsContainer = styled.div`
  word-wrap: break-word;
  white-space: pre-wrap;
`;

export const Results = ({ results }) => {
  // style labels
  const labelRenderer = (pathSegments, nodeType) => {
    const label = pathSegments[0];

    // top level field (name)
    if (pathSegments.length === 1) {
      const item = results[label];
      return <span>{item.name}</span>;
    }
    if (nodeType === "Object" || nodeType === "Array") {
      return <span>{label}</span>;
    }
    return <span>{`${label}:`}</span>;
  };

  return (
    <ResultsContainer>
      {results.length === 0 ? (
        <div>No results</div>
      ) : (
        <JSONTree
          key={JSON.stringify(results)}
          data={results}
          hideRoot={true}
          labelRenderer={labelRenderer}
          getItemString={() => null}
          theme={theme}
        />
      )}
    </ResultsContainer>
  );
};
