import { ADD_TASK, REMOVE_TASK, UPDATE_TASK, MARK_TASK } from "../actions/actionTypes";
import { v4 as uuid } from 'uuid';

const initialTasks = [{
  id: "25aeaf32-3ef6-4009-869d-b784f1f072cd",
  title: "Task one",
  desc: "Details one",
  due_date: 168,
  priority: "urgent",
}];

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
            due_date: action.payload.due_date,
            priority: action.payload.priority
          }
        ]
      }

    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id);

    case MARK_TASK:
      {
        const filtered = state.filter((task) => task.id !== action.payload.id);
        return [
          ...filtered,
          {
            id: action.payload.task.id,
            title: action.payload.task.title,
            desc: action.payload.task.desc,
            due_date: action.payload.task.due_date,
            priority: action.payload.task.priority,
            status: action.payload.status
          }
        ]
      }

    case UPDATE_TASK:
      {
        const filtered = state.filter((task) => task.id !== action.payload.id);
        return [
          ...filtered,
          {
            id: action.payload.id,
            title: action.payload.title,
            desc: action.payload.desc,
            due_date: action.payload.due_date,
            priority: action.payload.priority,
            status: action.payload.status
          }
        ]
      }

    default:
      return state;
  }
}

export default TaskReducer;
