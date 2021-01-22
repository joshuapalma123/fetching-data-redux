import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: "",
      title: "",
      body: "",
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userID, title, body, posts } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userID"
              value={userID}
              onChange={this.changeHandler}
            ></input>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            ></input>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            ></input>
          </div>
          <button type="submit" onClick={this.clickHandler}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
