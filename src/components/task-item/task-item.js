import React from "react";
import PropTypes from "prop-types";
import { ENTER_KEY } from "../constants/constants";

const TaskItem = ({ todos, currentEdit, visibilityFilter, actions }) => {
  const visible = todos.filter(el => {
    return (
      visibilityFilter === "SHOW_ALL" ||
      (visibilityFilter === "SHOW_ACTIVE" && !el.checked) ||
      (visibilityFilter === "SHOW_COMPLETED" && el.checked)
    );
  });

  const element = visible.map(item => {
    const handleCheckTodo = () => {
      return actions.toggleTodo(item.id);
    };
    const handleTodoEdit = () => {
      return actions.changeEditId(item.id);
    };
    const handleDestroyItem = () => {
      return actions.destroy(item.id);
    };

    const handleAddItemOnLossFocus = e => {
      if (e.target.value.trim() === "") {
        return actions.destroy(item.id);
      } else {
        actions.editTodo(item.id, e.target.value);
        e.target.value = "";
      }
    };
    const handleAddItemByPressEnter = e => {
      if (e.keyCode === ENTER_KEY) {
        if (e.target.value.trim() === "") {
          return actions.destroy(item.id);
        } else {
          actions.editTodo(item.id, e.target.value);
          e.target.value = "";
        }
      }
    };

    if (currentEdit === item.id) {
      return (
        <li key={item.id}>
          <input
            className="edit"
            autoFocus
            defaultValue={item.text}
            onBlur={handleAddItemOnLossFocus}
            onKeyUp={handleAddItemByPressEnter}
          />
        </li>
      );
    }

    return (
      <li key={item.id}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={item.checked}
            onChange={handleCheckTodo}
          />
          <label onDoubleClick={handleTodoEdit}>{item.text}</label>
          <button className="destroy" onClick={handleDestroyItem} />
        </div>
      </li>
    );
  });
  return element;
};

TaskItem.propTypes = {
  todos: PropTypes.array.isRequired,
  currentEdit: PropTypes.number.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

export default TaskItem;
