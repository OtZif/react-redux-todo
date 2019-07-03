import React, { Component } from "react";
import "./task.css";
import TaskItem from "../task-item/task-item";

class Tasks extends Component {
  render() {
    const {todos, currentEdit, visibilityFilter, actions } = this.props;
    return (
      <ul className="main--list">
        <TaskItem
          todos={todos}
          currentEdit={currentEdit}
          visibilityFilter ={visibilityFilter}
          actions={actions}
        />
      </ul>
    );
  }
}

export default Tasks;
