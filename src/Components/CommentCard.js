import React from "react";
import { useEffect, useState } from "react";
import { getComments, postComment, deleteComment } from "../Utils/api";

export default function Comment_card({ review_id }) {
  const username = "jessjelly";
  const [comments, setComments] = useState([]);
  const [isError, setIsError] = useState(false);
  const [newComment, setnewComment] = useState({
    username: "",
    body: "",
  });

  useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id, comments]);

  const handleChange = (event) => {
    const { value } = event.target;
    const copyCommentObj = { ...newComment };
    copyCommentObj.username = username;

    copyCommentObj[event.target.name] = value;

    setnewComment(copyCommentObj);
  };
  const handleSubmit = (event) => {
    setIsError(false);
    event.preventDefault();

    postComment(review_id, newComment).catch(() => {
      setIsError(true);
    });
    setnewComment({
      username: "",
      body: "",
    });
  };

  const handleDelete = (event) => {
    const revId = event.target.value;

    deleteComment(revId);
  };
  return (
    <div className="commentboxchild">
      <div>You are logged in as: {username}</div>
      <div className="commentbox">
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
        {isError && (
          <h3>
            There is no point posting an empty comment, please try again! Thanks
          </h3>
        )}
      </div>
      <ul className="commentcardparent">
        {comments.map((comment) => {
          return (
            <li className="commentcard" key={comment.comment_id}>
              <p>Author: {comment.author}</p>
              <p className="commentbody">" {comment.body} "</p>
              <p>Votes: {comment.votes}</p>
              {comment.author === username && (
                <button value={comment.comment_id} onClick={handleDelete}>
                  Delete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
