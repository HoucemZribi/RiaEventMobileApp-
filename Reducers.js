import { combineReducers } from "redux";
const initialState = {
  User: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      const User = state;
      const addUser = User.splice;
    case "LOGOUT_USER":
      const User = [];
    default:
      return state;
  }
};
export default combineReducers({
  user: userReducer,
});
