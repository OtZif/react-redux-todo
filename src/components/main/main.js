import React, { Component } from "react";
import PropTypes from "prop-types";
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

  handleCheckAllTodo = () => {
    const { actions } = this.props;
    return actions.checkAllTodo();
  };

  render() {
    const { todos, currentEdit, visibilityFilter, actions } = this.props;
    return (
      <main className="main">
        {todos.length > 0 && (
          <input
            className="toggle-all"
            id="toggle-all"
            type="checkbox"
            checked={this.penStatus()}
            onChange={this.handleCheckAllTodo}
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

Main.propTypes = {
  todos: PropTypes.array.isRequired,
  allChecked: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  currentEdit: PropTypes.number.isRequired,
  visibilityFilter: PropTypes.string.isRequired
};

export default Main;
