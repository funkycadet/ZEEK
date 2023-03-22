import {createStore, combineReducers, applyMiddleware} from "redux";
import {devToolsEnhancer} from "redux-devtools-extension";
import ThemeReducer from "./reducers/themeReducer";
import TaskReducer from "./reducers/taskReducer";
import thunk from "redux-thunk";
import UserReducer from "./reducers/userReducer";

const reducer = combineReducers ({
  tasks: TaskReducer,
  theme: ThemeReducer,
  user: UserReducer
});

const store = createStore(reducer, devToolsEnhancer());
export default store;
