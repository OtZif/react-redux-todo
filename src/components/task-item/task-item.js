import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

const TaskItem = ({
  visibilityFilter,
  todos,
  currentEdit,
  actions,
}) => {
  const visible = todos.filter(el => {
    return (
      visibilityFilter === "SHOW_ALL" ||
      (visibilityFilter === "SHOW_ACTIVE" && !el.checked) ||
      (visibilityFilter === "SHOW_COMPLETED" && el.checked)
    );
  });

  const element = visible.map(item => {
    if (currentEdit === item.id) {
      return (
        <li key={item.id}>
          <input
            id={currentEdit.id}
            className="edit"
            autoFocus
            defaultValue={item.text}
            onBlur={e => {
              if (e.target.value.trim() === "") {
                return actions.destroy(item.id);
              } else {
                actions.editTodo(item.id, e.target.value);
                e.target.value = "";
              }
            }}
            onKeyUp={e => {
              //const {dispatch} = store;
              if (e.keyCode === 13) {
                if (e.target.value.trim() === "") {
                  return actions.destroy(item.id);
                } else {
                  actions.editTodo(item.id, e.target.value);
                  e.target.value = "";
                }
              }
            }}
          />
        </li>
      );
    }

    return (
      <li key={item.id}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            checked={item.checked}
            onChange={() => actions.toggleTodo(item.id)}
          />
          <label onDoubleClick={() => actions.changeEditId(item.id)}>
            {item.text}
          </label>
          <button
            className="destroy"
            onClick={() => actions.destroy(item.id)}
          />
        </div>
      </li>
    );
  });
  return element;
};

const mapStateToProps = state => ({
  visibilityFilter: state.visibilityFilter,
  todos: state.todos,
  currentEdit: state.currentEdit
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskItem);
