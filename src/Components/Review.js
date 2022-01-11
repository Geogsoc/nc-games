import React, { useState, useEffect } from "react";
import { getReview } from "../Utils/api";
import { useParams } from "react-router";

export default function Review() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [review, setReview] = useState([]);

  let { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReview(review_id)
      .then((reviewFromApi) => {
        console.log(reviewFromApi, "single review");
        setIsLoading(false);
        setReview(reviewFromApi[0]);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [review_id]);

  return (
    <div>
      <section className="singlereview">
        <h2>{review.owner}</h2>
        <h3>{review.title}</h3>
        <img className="photo" src={review.review_img_url} alt={review.title} />
        <p>{review.review_body}</p>
        <p> votes: {review.votes}</p>
      </section>
      <section>
        <h2>Comments</h2>
      </section>
    </div>
  );
}
