import React from "react";
import { connect } from "react-redux";
import Title from "../title/title";
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";
import "./app.css";

const App = ({ todos }) => {
  return (
    <div>
      <Title />
      <section className="todo">
        <Header />
        <Main />
        {todos.length > 0 && <Footer />}
      </section>
    </div>
  );
};
const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);
