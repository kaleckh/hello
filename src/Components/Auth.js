import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import {connect} from "react-redux";
import { updateUser } from "../ducks/reducer";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  login = () => {
    var body = {
      username: this.state.username,
      password: this.state.password,
    };
    axios.post("http://localhost:4000/login", body).then((res) => {
      this.props.updateUser(res.data.id,res.data.username,res.data.hash)
      
      this.props.history.push("/dashboard");
      
    });
  };

  createUser = () => {
    var body = {
      username: this.state.username,
      password: this.state.password,
    };
    axios.post("http://localhost:4000/auth", body).then((res) => {
      this.props.history.push("/dashboard");
    });
  };
  render() {
    return (
      <div>
        {" "}
        Auth{" "}
        <input
          onChange={(event) =>
            this.setState({
              username: event.target.value,
            })
          }
        />{" "}
        <input
          onChange={(event) =>
            this.setState({
              password: event.target.value,
            })
          }
        />{" "}
        <button
          onClick={() => {
            this.login();
          }}
        >
          {" "}
          login{" "}
        </button>{" "}
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

export default withRouter(
  connect(null, {
    updateUser,
  })(Auth)
);
