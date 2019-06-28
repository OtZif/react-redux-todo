export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const REMOVE_COMPLETED = "REMOVE_COMPLETED";
export const CHECK_ALL_TODO = "CHECK_ALL_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const CHANGE_EDIT_ID = "CHANGE_EDIT_ID";

export const Filters = {
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
