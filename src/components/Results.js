import React from "react";

export const Results = ({ results }) => {
  return (
    <div>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
};
