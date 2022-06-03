import { Typography } from "@mui/material";
import React, { Component } from "react";
import postStyles from '../styles/Posts.module.css'

import PropTypes from 'prop-types'

import { connect } from "react-redux";
import { fetchPosts } from "../src/actions/postActions";

export class Posts extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: [],
  //   };
  // }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map((post) => (
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

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts);
