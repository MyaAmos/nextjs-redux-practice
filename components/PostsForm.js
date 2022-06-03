import { Button } from "@mui/material";
import React, { Component } from "react";
import { Typography } from "@mui/material";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { createPost } from "../src/actions/postActions";

export class PostsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 101,
      title: "",
      body: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <Typography variant='h4'>Add Post</Typography>
        <br/>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <Button type="submit" variant="outlined">Submit</Button>
        </form>
        <br />
      </div>
    );
  }
}

PostsForm.propTypes ={
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostsForm);
