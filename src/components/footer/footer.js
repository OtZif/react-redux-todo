import React, { Component } from "react";
import classNames from "classnames";
import "./footer.css";

class Footer extends Component {
  buttons = [
    { name: "SHOW_ALL", label: "All" },
    { name: "SHOW_ACTIVE", label: "Active" },
    { name: "SHOW_COMPLETED", label: "Completed" }
  ];

  clearAmount = () => {
    const { todos } = this.props;
    const amount = todos.filter(el => el.checked).length;
    return amount === 0 ? `clear-completed visibility` : "clear-completed";
  };

  amount = () => {
    const { amount } = this.props;
    if (amount <= 1) {
      return `${amount} item left`;
    } else {
      return `${amount} items left`;
    }
  };

  renderButtons = () => {
    const { visibilityFilter, actions } = this.props;
    return this.buttons.map(({ name, label }) => {
      return (
        <button
          key={name}
          className={classNames("control--item", {
            selected: visibilityFilter === name
          })}
          onClick={() => actions.setVisibilityFilter(name)}
        >
          {label}
        </button>
      );
    });
  };
  handleClickRemoveCompleted = () => {
    const { actions } = this.props;
    return actions.removeCompleted();
  };

  render() {
    return (
      <footer className="footer">
        <span>{this.amount()}</span>
        <div className="control">{this.renderButtons()}</div>
        <button
          className={this.clearAmount()}
          onClick={this.handleClickRemoveCompleted}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}

export default Footer;
