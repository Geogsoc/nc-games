import React, { useState, useEffect } from "react";
import { getReview } from "../Utils/api";
import { useParams } from "react-router";

import CommentCard from "./CommentCard";
import Votes from "./Votes";

export default function Review() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [review, setReview] = useState([]);

  let { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReview(review_id)
      .then((reviewFromApi) => {
        setIsLoading(false);
        setReview(reviewFromApi[0]);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [review_id]);

  return (
    <>
      <section className="singlereview">
        <h2>{review.owner}</h2>
        <h3>{review.title}</h3>
        <img
          className="singlephoto"
          src={review.review_img_url}
          alt={review.title}
        />
        <p>{review.review_body}</p>
        <Votes votes={review.votes} review_id={review.review_id} />
      </section>
      <section>
        <h2>Comments</h2>
        <div>
          <CommentCard review_id={review.review_id} />
        </div>
      </section>
    </>
  );
}
