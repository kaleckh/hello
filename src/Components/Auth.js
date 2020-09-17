import React, { Component } from "react";
import axios from "axios"
import { withRouter } from "react-router";


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  createUser = () => {
    var body = {
      username: this.state.username,
      password: this.state.password

    }
    axios.post("http://localhost:4000/auth", body ).then((res) => {
      this.props.history.push("/dashboard")
      
    })
  };
  render() {
    return (
      <div>
        {" "}
        Auth{" "}
        <input
          onChange={(event) =>
            this.setState({
              username: event.target.value
            })
          }
        />{" "}
        <input
          onChange={(event) =>
            this.setState({
              password: event.target.value
            })
          }
        />{" "}
        <button> login </button>{" "}
        <button
          onClick={() => {
            this.createUser();
          }}
        >
          {" "}
          register{" "}
        </button>{" "}
      </div>
    );
  }
}

export default withRouter(Auth) 

