import { CHANGE_PRIORITY_FILTER, CHANGE_STATUS_FILTER, CHANGE_CATEGORY_FILTER } from "../actions/actionTypes";

const initialFilter = {
  status: "all",
  priority: "all",
  category: "all"
}

const FilterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case CHANGE_STATUS_FILTER:
      return { ...initialFilter, status: action.payload };

    case CHANGE_PRIORITY_FILTER:
      return { ...initialFilter, priority: action.payload };

    case CHANGE_CATEGORY_FILTER:
      return { ...initialFilter, category: action.payload };

    default:
      return state;
  }
}
export default FilterReducer;
