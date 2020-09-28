import React, { Component } from "react";
import axios from "axios";
import { createPost } from "../ducks/reducer";
import { connect } from "react-redux"
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      content: "",
    };
  }
  render() {
    return (
      <div>
        <input
          onChange={(event) => {
            this.setState({
              name: event.target.value,
            });
          }}
          type="text"
        />
        <input
          onChange={(event) => {
            this.setState({
              image: event.target.value,
            });
          }}
          type="text"
        />
        <input
          onChange={(event) => {
            this.setState({
              content: event.target.value,
            });
          }}
          type="text"
        />
        <button
          onClick={() => {
            var postBody = {
              name: this.state.name,
              image: this.state.image,
              content: this.state.content,
            };
            axios
              .post("http://localhost:4001/post", postBody)
              .then((res) => {
                debugger
                this.props.createPost(res.data[0])
                this.props.history.push("/dashboard")
              })
              .catch((err) => {
                console.log("err");
              });
          }}
        >
          save
        </button>
      </div>
    );
  }
}

export default connect(null, {
  createPost
})(Form);
