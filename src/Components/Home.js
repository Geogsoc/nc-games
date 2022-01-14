import React, { useEffect, useState } from "react";
import { getReviews, getCategories } from "../Utils/api";
import { useParams, useNavigate } from "react-router";
import ReviewCard from "./ReviewCard";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [reviews, setreviews] = useState([]);

  const [sort_by, setSortby] = useState(null);
  const [order, setOrder] = useState(null);

  //
  const [categories, setCategories] = useState([]);
  // { slug: "All Categories" }
  let navigate = useNavigate();

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      // const copycategories = { ...categories };
      // categoriesFromApi.unshift(copycategories);

      setCategories(categoriesFromApi);
    });
  }, []);

  const handleCategory = (event) => {
    // console.log(event.target.value);
    // if (event.target.value === "All Categories") {
    //   navigate(`/`);
    // } else {
    navigate(`/reviews/${event.target.value}`);
    // }
  };
  const handleSort = (event) => {
    const valueObj = JSON.parse(event.target.value);

    setSortby(valueObj.sort_by);
    setOrder(valueObj.order);
  };

  let { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReviews(category, sort_by, order)
      .then((reviewsFromApi) => {
        setIsLoading(false);
        setreviews(reviewsFromApi);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [sort_by, order, category]);

  let nameCapitalized = "";

  if (category) {
    nameCapitalized = category.charAt(0).toUpperCase() + category.slice(1);
  }

  return (
    <section className="reviewslist">
      {isError ? (
        <h2>Whoops something went wrong with that request!</h2>
      ) : (
        <div>
          {isLoading ? (
            <h2>Loading.....</h2>
          ) : (
            <div>
              <h1>{nameCapitalized} Game Reviews</h1>

              <div className="wrapper">
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
              </div>
              <ul className="wrapper">
                {reviews.map((review) => {
                  return (
                    <div key={review.review_id}>
                      <ReviewCard review={review} />
                    </div>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
