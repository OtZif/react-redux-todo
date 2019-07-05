import React, { Component } from "react";
import PropTypes from "prop-types";
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
  handleRemoveCompletedClick = () => {
    const { actions } = this.props;
    return actions.removeCompleted();
  };

  renderButtons = () => {
    const { visibilityFilter, actions } = this.props;
    return this.buttons.map(({ name, label }) => {
      const handleFilterChange = () => {
        actions.setVisibilityFilter(name);
      };
      return (
        <button
          key={name}
          className={classNames("control--item", {
            selected: visibilityFilter === name
          })}
          onClick={handleFilterChange}
        >
          {label}
        </button>
      );
    });
  };

  render() {
    return (
      <footer className="footer">
        <span>{this.amount()}</span>
        <div className="control">{this.renderButtons()}</div>
        <button
          className={this.clearAmount()}
          onClick={this.handleRemoveCompletedClick}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  visibilityFilter: PropTypes.string.isRequired
};

export default Footer;
