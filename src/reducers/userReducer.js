export default function userReducer(user, action) {
  console.log(33, action);
  switch (action.type) {
    case "update": {
      return action.user;
    }
    case "delete": {
      return null;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
