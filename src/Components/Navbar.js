import React from "react";
import { useState, useEffect } from "react";
import { getCategories } from "../Utils/api";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navBar">
      <Link to={"/reviews/"}>
        <p className="navitem">Home</p>
      </Link>

      <h1 className="title">NC GAMES</h1>
    </div>
  );
}

// tag={Link}
// to={`/reviews/${category.slug}`}
