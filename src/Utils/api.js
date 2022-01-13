import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://ncgame2021.herokuapp.com/api",
});

export const getReviews = (category, sort_by, order) => {
  return gamesApi
    .get("/reviews/", {
      params: { category: category, sort_by: sort_by, order: order },
    })
    .then((res) => {
      return res.data.reviews;
    });
};

export const getReview = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getCategories = () => {
  return gamesApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getComments = (review_id) => {
  return gamesApi.get(`reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchUser = (review_id, num) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: num })
    .then((res) => {
      return res.data.comment;
    });
};
export const postComment = (review_id, comment) => {
  return gamesApi
    .post(`/reviews/${review_id}/comments`, comment)
    .then((res) => {
      return res.data.comment;
    });
};
