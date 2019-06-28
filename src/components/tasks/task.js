import React, { Component } from "react";
import "./task.css";
import TaskItem from "../task-item/task-item";

class Tasks extends Component {
  render() {
    return (
      <ul className="main--list" id="mainList">
        <TaskItem />
      </ul>
    );
  }
}

export default Tasks;
