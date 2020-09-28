const UPDATE_USER = "UPDATE_USER";
const CREATE_POST = "CREATE_POST";
var initialState = {
  username: "no user",
  id: "",
  profilePic: "",
  posts: [
    {
      name: "asdf",
      image: "kale",
      content: "asdf",
    },
    {
      name: "asdf",
      image: "kale",
      content: "asdf",
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        id: action.payload.id,
        username: action.payload.username,
        profilePic: action.payload.profilePic,
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload.post],
      };
    default:
      return state;
  }
}

function updateUser(id, username, profilePic) {
  return {
    type: UPDATE_USER,
    payload: {
      id: id,
      username: username,
      profilePic: profilePic,
    },
  };
}

function createPost(post) {
  return {
    type: CREATE_POST,
    payload: {
      post,
    },
  };
}
export { updateUser, createPost };
