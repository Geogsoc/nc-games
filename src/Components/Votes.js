import React, { useState } from "react";
import { patchUser } from "../Utils/api";

export default function Votes({ votes, review_id }) {
  const [commentVotes, setCommentVotes] = useState(0);
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    setIsError(false);
    setCommentVotes((currentVotes) => currentVotes + 1);
    patchUser(review_id, 1).catch(() => {
      setIsError(true);
      setCommentVotes((currentVotes) => currentVotes - 1);
    });
  };
  return (
    <div>
      <p>Votes: {commentVotes + votes}</p>
      <button disabled={commentVotes === 1} onClick={handleClick}>
        Agree
      </button>
      {isError && <p>Something went wrong</p>}
    </div>
  );
}
