import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
    <Link to="/nested">Nested</Link>
  </div>
);

export default (Header);
