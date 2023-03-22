import {
  ADD_TASK,
  REMOVE_TASK,
  UPDATE_USER,
  UPDATE_TASK,
  TOGGLE_THEME,
  MARK_TASK
}
from "./actionTypes.js";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
}
export const updateTask = (task) => {
  return {
    type: UPDATE_TASK,
    payload: task,
  };
}
export const markTask = (task, status) => {
  return {
    type: MARK_TASK,
    payload: {
      task,
      status
    }
  };
}
export const removeTask = (task) => {
  return {
    type: REMOVE_TASK,
    payload: task,
  };
}
export const toggleTheme = () => {
  return {
    type: TOGGLE_THEME,
  };
}
export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
}
