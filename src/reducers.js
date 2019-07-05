import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  REMOVE_COMPLETED,
  CHECK_ALL_TODO,
  EDIT_TODO,
  CHANGE_EDIT_ID,
  CHECK_PEN
} from "./components/constants/constants";

import { filters } from "./actions";

const initialState = JSON.parse(localStorage.getItem("todo")) || {
  visibilityFilter: filters.SHOW_ALL,
  nextId: 0,
  allChecked: false,
  currentEdit: -1,
  todos: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });

    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            id: state.nextId,
            text: action.text,
            checked: false
          }
        ],
        nextId: state.nextId + 1,
        allChecked: false
      });

    case REMOVE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter(el => el.id !== action.id)
      });

    case REMOVE_COMPLETED:
      return Object.assign({}, state, {
        todos: state.todos.filter(el => !el.checked),
        allChecked: false
      });

    case CHECK_ALL_TODO:
      return Object.assign({}, state, {
        ...state,
        todos: state.todos.map(el => ({ ...el, checked: !state.allChecked })),
        allChecked: !state.allChecked
      });

    case EDIT_TODO:
      return Object.assign({}, state, {
        ...state,
        todos: state.todos.map(el => {
          if (el.id === action.id) {
            return {
              ...el,
              text: action.text
            };
          }
          return el;
        }),
        currentEdit: -1
      });

    case CHANGE_EDIT_ID:
      return Object.assign({}, state, {
        currentEdit: action.id
      });

    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, id) => {
          if (todo.id === action.id) {
            return Object.assign({}, todo, {
              checked: !todo.checked
            });
          }
          return todo;
        })
      });

    case CHECK_PEN:
      return Object.assign({}, state, {
        ...state,
        allChecked: !state.allChecked
      });

    default:
      return state;
  }
};
