import React from "react";
import PropTypes from 'prop-types';

import Title from "../title/title";
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";
import "./app.css";

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

App.propTypes = {
  todos:PropTypes.array.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  actions:PropTypes.object.isRequired,
  allChecked: PropTypes.bool.isRequired,
  currentEdit: PropTypes.number.isRequired,
};

export default App;
