import React from "react";
import { useEffect, useState } from "react";
import { getComments, postComment } from "../Utils/api";

export default function Comment_card({ review_id }) {
  const [comments, setComments] = useState([]);
  const [newComment, setnewComment] = useState({
    username: "",
    body: "",
  });

  console.log(newComment, "new comment in the comment-card");

  useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id]);

  const handleChange = (event) => {
    const { value } = event.target;
    const copyCommentObj = { ...newComment };
    copyCommentObj.username = "jessjelly";

    copyCommentObj[event.target.name] = value;

    setnewComment(copyCommentObj);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    postComment(review_id, newComment);
    setnewComment({
      username: "",
      body: "",
    });
  };
  return (
    <div>
      <div>
        <form>
          <label>
            What do you think?:
            <input
              type="text"
              name="body"
              onChange={handleChange}
              value={newComment.body}
            />
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
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
