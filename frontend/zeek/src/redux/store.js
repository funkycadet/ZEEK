import {createStore, combineReducers, applyMiddleware} from "redux";
import {devToolsEnhancer} from "redux-devtools-extension";
import ThemeReducer from "./reducers/themeReducer";
import TaskReducer from "./reducers/taskReducer";
import thunk from "redux-thunk";
import UserReducer from "./reducers/userReducer";
import FilterReducer from "./reducers/filterReducer";
import CategoryReducer from "./reducers/categoryReducer";
import ViewportReducer from "./reducers/viewportReducer";

const reducer = combineReducers ({
  tasks: TaskReducer,
  categories: CategoryReducer,
  theme: ThemeReducer,
  user: UserReducer,
  filters: FilterReducer,
  viewport: ViewportReducer
});

const store = createStore(reducer, devToolsEnhancer());
export default store;
