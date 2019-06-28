import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import classNames from "classnames";
import "./footer.css";
import * as actions from "../../actions";

class Footer extends Component {
  buttons = [
    { name: "SHOW_ALL", label: "All" },
    { name: "SHOW_ACTIVE", label: "Active" },
    { name: "SHOW_COMPLETED", label: "Completed" }
  ];

  clearAmount = () => {
    const amount = this.props.todos.filter(el => el.checked).length;
    return amount === 0 ? `clear-completed visibility` : "clear-completed";
  };

  amount = () => {
    if (this.props.amount <= 1) {
      return `${this.props.amount} item left`;
    } else {
      return `${this.props.amount} items left`;
    }
  };

  renderButtons = () => {
    return this.buttons.map(({ name, label }) => {
      return (
        <button
          key={name}
          className={classNames(
            `control--item  ${
              this.props.visibilityFilter === name ? "selected" : ""
            } `
          )}
          onClick={() => this.props.actions.setVisibilityFilter(name)}
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
          onClick={() => this.props.actions.removeCompleted()}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}
const mapStateToProps = state => ({
  visibilityFilter: state.visibilityFilter,
  todos: [...state.todos],
  amount: state.todos.filter(el => !el.checked).length
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
