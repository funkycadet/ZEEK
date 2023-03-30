import { UPDATE_USER } from "../actions/actionTypes";

const initialUser = {
  id: 1,
  username: "abebe",
  name: "Abebe",
  password: "abebe",
  creation_time: new Date().toLocaleString(),
  login_time: new Date().toString()
}

const UserReducer = (state = initialUser, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return action.payload;

    default:
      return state;
  }
}
export default UserReducer;
