import React, { Component } from "react";
import { connect } from "react-redux"

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      myPosts: true,
    };
  }

  handleInputChange = (event) => {
    this.setState({
      myPosts: event.target.checked,
    });
  };

  render() {
    return (
      <div>
        <div>dash</div>

        <input
          value={this.state.searchInput}
          onChange={(event) => {
            this.setState({
              searchInput: event.target.value,
            });
          }}
          type="text"
        />
        <button
          onClick={() => {
            console.log("searching");
          }}
        >
          search
        </button>
        <button
          onClick={() => {
            this.setState({
              searchInput: "",
            });
          }}
        >
          reset
        </button>
        <div>
          my posts
          <input
            onChange={this.handleInputChange}
            checked={this.state.myPosts}
            type="checkbox"
          />
        </div>
        <div>
          {this.props.posts.map((post) => {
            return [
              <div>
                <div> {post.image}, </div>
                <div> {post.name} </div>
                <div> {post.content} </div>
              </div>,
            ];
          })}
        </div>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    posts: state.posts,
    

  };
}

export default connect(mapStateToProps)(Dashboard);



