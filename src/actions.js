import {
  ADD_TODO,
  REMOVE_TODO,
  REMOVE_COMPLETED,
  TOGGLE_TODO,
  CHECK_ALL_TODO,
  CHECK_PEN,
  SET_VISIBILITY_FILTER,
  EDIT_TODO,
  CHANGE_EDIT_ID
} from "./constants/constants";

export const filters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_COMPLETED: "SHOW_COMPLETED"
};

export const addTodo = text => {
  return {
    type: ADD_TODO,
    text
  };
};

export const destroy = id => {
  return {
    type: REMOVE_TODO,
    id
  };
};
export const removeCompleted = () => {
  return {
    type: REMOVE_COMPLETED
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const checkAllTodo = () => {
  return {
    type: CHECK_ALL_TODO
  };
};

export const checkPen = () => {
  return {
    type: CHECK_PEN
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};

export const editTodo = (id, text) => {
  return {
    type: EDIT_TODO,
    id,
    text
  };
};
export const changeEditId = id => {
  return {
    type: CHANGE_EDIT_ID,
    id
  };
};
