import React from "react";

const TaskItem = ({ todos, currentEdit, visibilityFilter, actions }) => {
  const visible = todos.filter(el => {
    return (
      visibilityFilter === "SHOW_ALL" ||
      (visibilityFilter === "SHOW_ACTIVE" && !el.checked) ||
      (visibilityFilter === "SHOW_COMPLETED" && el.checked)
    );
  });

  const element = visible.map(item => {
    const handlerClickCheckTodo = () => {
      return actions.toggleTodo(item.id);
    };
    const handlerDbClickTodoEdit = () => {
      return actions.changeEditId(item.id);
    };
    const handlerClickDestroyItem = () => {
      return actions.destroy(item.id);
    };

    const handlerOnBlur = e => {
      if (e.target.value.trim() === "") {
        return actions.destroy(item.id);
      } else {
        actions.editTodo(item.id, e.target.value);
        e.target.value = "";
      }
    };
    const pressEnter = e => {
      const ENTER_KEY = 13;
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
            onBlur={handlerOnBlur}
            onKeyUp={pressEnter}
          />
        </li>
      );
    }

    return (
      <li key={item.id}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            checked={item.checked}
            onChange={handlerClickCheckTodo}
          />
          <label onDoubleClick={handlerDbClickTodoEdit}>{item.text}</label>
          <button className="destroy" onClick={handlerClickDestroyItem} />
        </div>
      </li>
    );
  });
  return element;
};

export default TaskItem;
