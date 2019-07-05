import React, { Component } from "react";
import PropTypes from "prop-types";
import "./task.css";
import TaskItem from "../task-item/task-item";

class Tasks extends Component {
  render() {
    const { todos, currentEdit, visibilityFilter, actions } = this.props;
    return (
      <ul className="main--list">
        <TaskItem
          todos={todos}
          currentEdit={currentEdit}
          visibilityFilter={visibilityFilter}
          actions={actions}
        />
      </ul>
    );
  }
}

Tasks.propTypes = {
  todos: PropTypes.array.isRequired,
  currentEdit: PropTypes.number.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};
export default Tasks;
