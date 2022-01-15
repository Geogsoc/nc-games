import React, { useState, useEffect } from "react";
import { getReview } from "../Utils/api";
import { useParams } from "react-router";

import CommentCard from "./CommentCard";
import Votes from "./Votes";

export default function Review() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [review, setReview] = useState([]);

  let { review_id } = useParams();

  console.log(review_id);
  useEffect(() => {
    setIsLoading(true);

    getReview(review_id)
      .then((reviewFromApi) => {
        setIsLoading(false);
        setReview(reviewFromApi[0]);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <>
      {isError ? (
        <h2>I think you have made an error, please have another go!</h2>
      ) : (
        <>
          {isLoading ? (
            <h2>Loading .....</h2>
          ) : (
            <>
              <section className="reviewslist">
                <h2>{review.owner}</h2>
                <h3>{review.title}</h3>
                <img
                  className="singlephoto"
                  src={review.review_img_url}
                  alt={review.title}
                />
                <p className="reviewBody">{review.review_body}</p>
                <Votes votes={review.votes} review_id={review.review_id} />
              </section>
              <section className="comment">
                <h2>Comments</h2>
                <div className="commentboxparent">
                  <CommentCard review_id={review_id} />
                </div>
              </section>
            </>
          )}
        </>
      )}
    </>
  );
}
