import React, { Component } from "react";
import "./main.css";
import Tasks from "../tasks/task";

class Main extends Component {
  penStatus = () => {
    const { todos, allChecked, actions } = this.props;
    const status = todos.every(el => el.checked);
    if (status) {
      if (!allChecked) {
        actions.checkPen();
      }
    } else {
      if (allChecked) {
        actions.checkPen();
      }
    }
    return status;
  };

  handleClickCheckAllTodo = () => {
    const { actions } = this.props;
    return actions.checkAllTodo();
  };

  render() {
    const { todos, currentEdit, visibilityFilter, actions } = this.props;
    return (
      <main className="main">
        {todos.length > 0 && (
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onChange={this.handleClickCheckAllTodo}
            checked={this.penStatus()}
          />
        )}
        <label className="pen" htmlFor="toggle-all" />
        <Tasks
          todos={todos}
          currentEdit={currentEdit}
          visibilityFilter={visibilityFilter}
          actions={actions}
        />
      </main>
    );
  }
}

export default Main;
