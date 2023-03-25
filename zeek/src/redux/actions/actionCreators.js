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
  ADD_STATUS_FILTER,
  REMOVE_STATUS_FILTER,
  ADD_PRIORITY_FILTER,
  REMOVE_PRIORITY_FILTER,
  ADD_CATEGORY_FILTER,
  REMOVE_CATEGORY_FILTER
  SET_VIEWPORT
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
export const addStatusFilter = (filter) => {
  return {
    type: ADD_STATUS_FILTER,
    payload: filter
  }
}
export const removeStatusFilter = (filter) => {
  return {
    type: REMOVE_STATUS_FILTER,
    payload: filter
  }
}
export const addPriorityFilter = (filter) => {
  return {
    type: ADD_PRIORITY_FILTER,
    payload: filter
  }
}
export const removePriorityFilter = (filter) => {
  return {
    type: REMOVE_PRIORITY_FILTER,
    payload: filter
  }
}
export const addCategoryFilter = (filter) => {
  return {
    type: ADD_CATEGORY_FILTER,
    payload: filter
  }
}
export const removeCategoryFilter = (filter) => {
  return {
    type: REMOVE_CATEGORY_FILTER,
    payload: filter
  }
}
export const setViewport = (current, target) => {
  return {
    type: SET_VIEWPORT,
    payload: {
      current,
      target
    }
  }
}
