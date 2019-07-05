import React from "react";
import PropTypes from "prop-types";
import "./header.css";
import { ENTER_KEY } from "../constants/constants";

const Header = ({ actions }) => {
  const handleAddItemOnLossingFoces = e => {
    if (e.target.value.trim() === "") {
      return;
    } else {
      actions.addTodo(e.target.value);
      e.target.value = "";
    }
  };

  const handleAddItemByPressEnter = e => {
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
        className="header--new-task"
        type="text"
        placeholder="What needs to be done?"
        autoFocus
        onBlur={handleAddItemOnLossingFoces}
        onKeyUp={handleAddItemByPressEnter}
      />
    </header>
  );
};

Header.propTypes = {
  actions: PropTypes.object.isRequired
};

export default Header;
