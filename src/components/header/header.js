import React from "react";
import "./header.css";

const Header = ({ actions }) => {
  const handlerOnBlur = e => {
    if (e.target.value.trim() === "") {
      return;
    } else {
      actions.addTodo(e.target.value);
      e.target.value = "";
    }
  };

  const pressEnter = e => {
    const ENTER_KEY = 13;
    if (e.keyCode === ENTER_KEY) {
      if (e.target.value.trim() === "") {
        return;
      } else {
        actions.addTodo(e.target.value);
        e.target.value = "";
      }
    }
  };

  return (
    <header className="header">
      <input
        type="text"
        className="header--new-task"
        placeholder="What needs to be done?"
        autoFocus
        onBlur={handlerOnBlur}
        onKeyUp={pressEnter}
      />
    </header>
  );
};

export default Header;
