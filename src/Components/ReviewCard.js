import React from "react";

import { Link } from "react-router-dom";

export default function ReviewCard({ review }) {
  console.log(review, "from ReviewCard");
  return (
    <div>
      <Link to={`/review/${review.review_id}`}>
        <div className="card">
          <p>Username: {review.owner} </p>
          <p>{review.title}</p>
          <img
            className="photo"
            src={review.review_img_url}
            alt={review.title}
          />
          <p>Votes: {review.votes}</p>
          <p>Comments: {review.comment_count}</p>
          <p>Category: {review.category}</p>
        </div>
      </Link>
    </div>
  );
}

<Link to={"/"}>
  <p className="navitem">Home</p>
</Link>;
