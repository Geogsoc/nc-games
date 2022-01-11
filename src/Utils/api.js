import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://ncgame2021.herokuapp.com/api",
});

export const getReviews = (category) => {
  return gamesApi.get("/reviews", { params: { category } }).then((res) => {
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
