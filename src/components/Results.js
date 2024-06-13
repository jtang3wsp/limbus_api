import React from "react";
import { JSONTree } from "react-json-tree";

export const Results = ({ results }) => {
  const style = {
    "background-color": "#012a36",
    "padding-left": "1.5em",
    "padding-top": "0.5em",
  };

  // style labels
  const labelRenderer = (pathSegments, nodeType) => {
    const label = pathSegments[0];

    // top level field (name)
    if (pathSegments.length === 1) {
      const item = results[label];
      return <span>{item.name || `${item.sinner} - ${item.ego}`}</span>;
    }
    if (nodeType === "Object" || nodeType === "Array") {
      return <span>{label}</span>;
    }
    return <span>{`${label}:`}</span>;
  };

  return (
    <div style={style}>
      <JSONTree
        data={results}
        hideRoot={true}
        labelRenderer={labelRenderer}
        getItemString={() => null}
      />
    </div>
  );
};
