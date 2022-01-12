import React from "react";
import { useState, useEffect } from "react";
import { getCategories } from "../Utils/api";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [categories, setCategories] = useState([]);

  const [sort_by, setSort_by] = useState("");
  const [order, setOrder] = useState("");
  const [categoryChoice, setCatgoryChoice] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  useEffect(() => {
    navigate(`/reviews/${categoryChoice}${sort_by}${order}`);
  }, [sort_by, order]);

  useEffect(() => {
    navigate(`/reviews/${categoryChoice}`);
  }, [categoryChoice]);

  const handleCategory = (event) => {
    setCatgoryChoice(event.target.value);
  };
  const handleSort = (event) => {
    const valueObj = JSON.parse(event.target.value);

    setSort_by("/" + valueObj.sort_by);
    setOrder("/" + valueObj.order);
  };

  return (
    <div className="navBar">
      <Link to={"/reviews/"}>
        <p className="navitem">Home</p>
      </Link>
      <label className="navitem">
        Category{" "}
        <select onChange={handleCategory}>
          {categories.map((category) => {
            return (
              <option key={category.slug} value={category.slug}>
                {category.slug}
              </option>
            );
          })}
        </select>{" "}
      </label>
      <label className="navitem">
        Sort by
        <select onChange={handleSort}>
          <option value='{"sort_by":"created_at", "order": "DESC"}'>
            Age descending
          </option>
          <option value='{"sort_by":"created_at", "order": "ASC"}'>
            Age ascending
          </option>
          <option value='{"sort_by":"comment_count", "order": "DESC"}'>
            Comments descending
          </option>
          <option value='{"sort_by":"comment_count", "order": "ASC"}'>
            Comments asccending
          </option>
          <option value='{"sort_by":"votes", "order": "DESC"}'>
            Votes decending
          </option>
          <option value='{"sort_by":"votes", "order": "ASC"}'>
            Votes ascending
          </option>
        </select>
      </label>
      <h1 className="title">NC GAMES</h1>
    </div>
  );
}

// tag={Link}
// to={`/reviews/${category.slug}`}
