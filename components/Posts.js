import { Typography } from "@mui/material";
import React, { Component } from "react";
import postStyles from '../styles/Posts.module.css'

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  }

  render() {
    const postItems = this.state.posts.map((post) => (
      <div key={post.id}>
        <Typography variant="h5" className={postStyles.title}>{post.title}</Typography>
        <Typography variant="body1">{post.body}</Typography>
        <br/>
      </div>
    ));
    return (
      <div>
        <Typography variant="h4">Posts</Typography>
        <br/>
        {postItems}
      </div>
    );
  }
}

export default Posts;
