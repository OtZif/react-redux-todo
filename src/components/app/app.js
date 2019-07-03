import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Title from "../title/title";
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";
import "./app.css";
import * as actions from "../../actions";

const App = ({
  todos,
  visibilityFilter,
  amount,
  actions,
  allChecked,
  currentEdit
}) => {
  return (
    <div>
      <Title />
      <section className="todo">
        <Header actions={actions} />
        <Main
          todos={todos}
          allChecked={allChecked}
          actions={actions}
          currentEdit={currentEdit}
          visibilityFilter={visibilityFilter}
        />
        {todos.length > 0 && (
          <Footer
            todos={todos}
            visibilityFilter={visibilityFilter}
            amount={amount}
            actions={actions}
          />
        )}
      </section>
    </div>
  );
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
)(App);
