import React from "react";
import Posts from "../components/Posts";
import PostsForm from "../components/PostsForm";

const posts = () => {
  return (
    <>
      <PostsForm />
      <hr />
      <Posts />
    </>
  );
};

export default posts;
