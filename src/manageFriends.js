const initialState = {friends: []};

const actionAdd = {
  type: "friends/add",
  payload: {
    name: "Chrome Boi",
    hometown: "NYC",
    id: 1
  }
}

const actionRemove = {
  type: "friends/remove",
  payload: 1
}

export function manageFriends(state = initialState, action) {
  switch (action.type) {
    case "friends/add":
      return {friends: state.friends.push(action.payload)};
    case "friends/remove":
      return {friends: state.friends.filter(f) => f.id !== action.payload.id}
    default:
      return initialState
  }
}
