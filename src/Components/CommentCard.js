import React from "react";
import { useEffect, useState } from "react";
import { getComments } from "../Utils/api";

export default function Comment_card({ review_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id]);

  return (
    <div>
      <div>Here are the comments from the comment card</div>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>Author: {comment.author}</p>
              <p>" {comment.body} "</p>
              <p>Votes: {comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
