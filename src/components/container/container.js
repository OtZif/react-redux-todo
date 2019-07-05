import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import App from "../app/app";
import * as actions from "../../actions";

const Container = ({
  todos,
  visibilityFilter,
  amount,
  actions,
  allChecked,
  currentEdit
}) => {
  return (
    <App
      todos={todos}
      visibilityFilter={visibilityFilter}
      amount={amount}
      actions={actions}
      allChecked={allChecked}
      currentEdit={currentEdit}
    />
  );
};

Container.propTypes = {
  todos:PropTypes.array.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  actions:PropTypes.object.isRequired,
  allChecked: PropTypes.bool.isRequired,
  currentEdit: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter,
  amount: state.todos.filter(el => !el.checked).length,
  allChecked: state.allChecked,
  currentEdit: state.currentEdit
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
