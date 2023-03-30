import { SET_VIEWPORT } from "../actions/actionTypes";


const initialViewport = {
  current: "main",// main, add_task, edit_task, add_category, edit_category, view_user
  target: {}//Task or category to be edited if any
}

const ViewportReducer = (state = initialViewport, action) => {
  switch (action.type) {
    case SET_VIEWPORT:
      return {
        current: action.payload.current,
        target: action.payload.target
      };

    default:
      return state;
  }
}
export default ViewportReducer;
