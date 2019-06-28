import React from "react";
import { connect } from "react-redux";
import "./header.css";
import { addTodo } from "../../actions";

const Header = ({ dispatch }) => (
  <header className="header">
    <input
      type="text"
      className="header--new-task"
      id="newTask"
      placeholder="What needs to be done?"
      autoFocus
      onBlur={e => {
        if (e.target.value.trim() === "") {
          return NaN;
        } else {
          dispatch(addTodo(e.target.value));
          e.target.value = "";
        }
      }}
      onKeyUp={e => {
        if (e.keyCode === 13) {
          if (e.target.value.trim() === "") {
            return NaN;
          } else {
            dispatch(addTodo(e.target.value));
            e.target.value = "";
          }
        }
      }}
    />
  </header>
);

export default connect()(Header);
