import React, { useState, useEffect } from "react";
import { patchUser } from "../Utils/api";

export default function Votes({ votes, review_id }) {
  const [commentVotes, setCommentVotes] = useState(0);

  const [isError, setIsError] = useState(false);
  const [disable, setDisable] = useState(false);
  console.log(votes, "votes here in Votes component");
  console.log(commentVotes, "comment votes in Votes component");

  const handleClick = () => {
    setDisable(true);
    setIsError(false);
    setCommentVotes((currentVotes) => currentVotes + 1);
    patchUser(review_id, 1).catch(() => {
      setDisable(false);
      setIsError(true);
      setCommentVotes((currentVotes) => currentVotes - 1);
    });
  };
  return (
    <div>
      <p>Votes: {commentVotes + votes}</p>
      <button disabled={disable} onClick={handleClick}>
        Agree
      </button>
      {isError && <p>Something went wrong</p>}
    </div>
  );
}
