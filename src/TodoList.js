import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { toggleTodo } from "./actions";
import { toggleDelete} from "./actions";




class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              id = {todo.id}
              //handleToggle={event => this.props.toggleTodo(todo.id)}
              // handleDelete={event => this.props.toggleDelete(event, todo.id)}
              handleToggle={event => this.props.toggleTodo(todo.id)}
              title={todo.title}
              completed={todo.completed}
            />
          ))}
        </ul>
      </section>
    );
  }
}
const mapDispatchToProps = {
  toggleTodo, toggleDelete
}

// store.dispatch(toggelTodo())
export default connect(null, mapDispatchToProps)(TodoList);