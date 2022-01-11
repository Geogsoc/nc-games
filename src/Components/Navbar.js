import React from "react";
import { useState, useEffect } from "react";
import { getCategories } from "../Utils/api";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [categories, setCategories] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  const handleChange = (event) => {
    navigate(`/reviews/${event.target.value}`);
  };

  return (
    <div className="navBar">
      <Link to={"/"}>
        <p className="navitem">Home</p>
      </Link>

      <label className="navitem">
        Category{" "}
        <select onChange={handleChange}>
          {categories.map((category) => {
            return (
              <option key={category.slug} value={category.slug}>
                {category.slug}
              </option>
            );
          })}
        </select>{" "}
      </label>
      <label className="navitem">Sort by</label>
      <h1 className="title">NC GAMES</h1>
    </div>
  );
}

// tag={Link}
// to={`/reviews/${category.slug}`}
