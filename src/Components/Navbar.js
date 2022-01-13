import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navBar">
      <Link to={"/"}>
        <p className="navitem">Home</p>
      </Link>

      <h1 className="title">NC GAMES</h1>
    </div>
  );
}
