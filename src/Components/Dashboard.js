import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      myPosts: true,
      posts: [
        {
          title: "asdf",
          username: "kale",
          profilePic: "asdf",
        },
        {
          title: "asdf",
          username: "kale",
          profilePic: "asdf",
        },
      ],
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
          {this.state.posts.map((post) => {
            return [
              <div>
                <div> {post.profilePic}, </div>
                <div> {post.title} </div>
              </div>,
            ];
          })}
        </div>
      </div>
    );
  }
}

export default Dashboard;
