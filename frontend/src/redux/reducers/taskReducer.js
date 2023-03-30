import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from "../actions/actionTypes";
import { v4 as uuid } from 'uuid';

const initialTasks = [];

const TaskReducer = (state = initialTasks, action) => {
  switch (action.type) {
    case ADD_TASK:
      {
        return [
          ...state,
          {
            id: uuid(),
            title: action.payload.title,
            desc: action.payload.desc,
            priority: action.payload.priority,
            status: "Pending",
            category: action.payload.category
          }
        ]
      }

    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id);

    case UPDATE_TASK:
      {
        const filtered = state.filter((task) => task.id !== action.payload.id);
        return [
          ...filtered,
          {
            id: action.payload.id,
            title: action.payload.title,
            desc: action.payload.desc,
            priority: action.payload.priority,
            status: action.payload.status,
            category: action.payload.category
          }
        ]
      }

    default:
      return state;
  }
}

export default TaskReducer;
