import React, { useEffect, useState } from "react";
import { getReviews } from "../Utils/api";
import { useParams } from "react-router";
import ReviewCard from "./ReviewCard";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [reviews, setreviews] = useState([]);

  let { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReviews(category)
      .then((reviewsFromApi) => {
        setIsLoading(false);
        setreviews(reviewsFromApi);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [category]);
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
