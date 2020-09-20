import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Nav extends Component {
  render() {
    
    return (
      <div>
        <div>
        {this.props.username}
        {this.props.profilePic}
        </div>
        {console.log(this.props.username)}
        <Link to={"/dashboard"}>
          {" "}
          <button> Home </button>{" "}
        </Link>{" "}
        <Link to={"/new"}>
          {" "}
          <button> New Post </button>{" "}
        </Link>{" "}
        <Link to={"/auth"}>
          {" "}
          <button> Logout </button>{" "}
        </Link>{" "}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.username,
    profilePic: state.profilePic,
  };
}

export default connect(mapStateToProps)(Nav);
