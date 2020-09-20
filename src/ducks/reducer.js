const UPDATE_USER = "UPDATE_USER"
var initialState = {
    username: "kle",
    id: "",
    profilePic: "asef"

}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return {
                id: action.payload.id,
                username: action.payload.username,
                profilePic: action.payload.profilePic

            }
        default:
            return state


    }
}

function updateUser(id, username, profilePic) {
    return {
        type: UPDATE_USER,
        payload: {
            id: id,
            username: username, 
            profilePic: profilePic
    
        }
    }
}
export {
    updateUser
} 