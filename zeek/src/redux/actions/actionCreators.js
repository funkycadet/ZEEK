import {
  ADD_TASK,
  REMOVE_TASK,
  UPDATE_USER,
  UPDATE_TASK,
  TOGGLE_THEME,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  ADD_TO_CATEGORY,
  REMOVE_FROM_CATEGORY,
  CHANGE_STATUS_FILTER,
  CHANGE_PRIORITY_FILTER,
  CHANGE_CATEGORY_FILTER
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
export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    payload: category
  };
}
export const removeCategory = (category) => {
  return {
    type: REMOVE_CATEGORY,
    payload: category
  };
}
export const addToCategory = (task, category) => {
  return {
    type: ADD_TO_CATEGORY,
    payload: {
      task,
      category
    }
  };
}
export const removeFromCategory = (task, category) => {
  return {
    type: REMOVE_FROM_CATEGORY,
    payload: {
      task,
      category
    }
  };
}
export const changeStatusFilter = (filter) => {
  return {
    type: CHANGE_STATUS_FILTER,
    payload: filter
  }
}
export const changePriorityFilter = (filter) => {
  return {
    type: CHANGE_PRIORITY_FILTER,
    payload: filter
  }
}
export const changeCategoryFilter = (filter) => {
  return {
    type: CHANGE_CATEGORY_FILTER,
    payload: filter
  }
}
