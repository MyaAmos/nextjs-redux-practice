import React from "react";
import Posts from "../components/Posts";
import PostsForm from "../components/PostsForm";
import { Provider } from "react-redux";

const posts = () => {
  return (
    <div>
      <PostsForm />
      <hr />
      <Posts />
    </div>
  );
};

export default posts;
