import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./main.css";
import Tasks from "../tasks/task";
import * as actions from "../../actions";

class Main extends Component {
  render() {
    return (
      <main className="main">
        {this.props.base.length > 0 && (
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onChange={() => this.props.complete.checkAllTodo()}
            checked={this.props.base.every(el => el.checked)}
          />
        )}
        <label className="pen" htmlFor="toggle-all" />
        <Tasks />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  base: state.todos,
  allChecked: state.allChecked
});
const mapDispatchToProps = dispatch => ({
  complete: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
