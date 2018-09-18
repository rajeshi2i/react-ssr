import React from "react";

const NestedComponent  = ({ match }) => (
  <div>
    <h3>NestedComponent Path: {match.params.path}</h3>
  </div>
)

export default NestedComponent;