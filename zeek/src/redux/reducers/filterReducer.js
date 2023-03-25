import { 
  ADD_STATUS_FILTER, 
  ADD_CATEGORY_FILTER, 
  ADD_PRIORITY_FILTER, 
  REMOVE_STATUS_FILTER, 
  REMOVE_CATEGORY_FILTER, 
  REMOVE_PRIORITY_FILTER
} from "../actions/actionTypes";

const initialFilter = {
  status: [],
  priority: [],
  category: []
}

const FilterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case ADD_STATUS_FILTER: {
      const filteredState = state.status.filter((s) =>  s !== action.payload);
      return { ...state, status: [...filteredState, action.payload]};
    }

    case REMOVE_STATUS_FILTER: {
      const filteredState = state.status.filter((s) =>  s !== action.payload);
      return { ...state, status: [...filteredState]};
    }

    case ADD_PRIORITY_FILTER: {
      const filteredState = state.priority.filter((s) =>  s !== action.payload);
      return { ...state, priority: [...filteredState, action.payload]};
    }

    case REMOVE_PRIORITY_FILTER: {
      const filteredState = state.priority.filter((s) =>  s !== action.payload);
      return { ...state, priority: [...filteredState]};
    }

    case ADD_CATEGORY_FILTER: {
      const filteredState = state.category.filter((s) =>  s !== action.payload);
      return { ...state, category: [...filteredState, action.payload]};
    }

    case REMOVE_CATEGORY_FILTER: {
      const filteredState = state.category.filter((s) =>  s !== action.payload);
      return { ...state, category: [...filteredState]};
    }

    default:
      return state;
  }
}
export default FilterReducer;
