import React from "react";
import { JSONTree } from "react-json-tree";
import { theme } from "../themes/Theme.js";

export const Results = ({ results }) => {
  const style = {
    "background-color": theme.base00,
    "padding-left": "1em",
    "padding-top": "0.5em",
  };

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
    <div style={style}>
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
    </div>
  );
};
