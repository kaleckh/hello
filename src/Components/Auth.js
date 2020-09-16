import React, { Component } from "react";

class Auth extends Component {
  constructor(props) {
    super(props)
  this.state = {
    username: "",
    password: "" 
  }
  }
  
  render() {
    return <div> Auth 
    <input onChange={() =>
      this.setState({
        username: ""
      })
    }/>
    <input onChange={ () =>
      this.setState({
        password: ""
      })
    }/>
    <button>login</button>
    <button>register</button>
    </div>;
  }

}

export default Auth;
