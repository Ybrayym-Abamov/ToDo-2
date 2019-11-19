import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";
import { Route, NavLink } from "react-router-dom";
import TodoList from "./TodoList"
import { connect } from "react-redux"
import { addTodo, clearCompletedTodos } from "./actions"


class App extends Component {
  state = {
     todos: todosList,
    value: "",
    completed: false
  };
  // event handlers = inside we are using this.setState
  handleDelete = (event, todoIdToDelete) => {
    // identify what we want to change in state
    // create a copy of state and modify it
    // const newTodoList = this.state.todos.filter(
    //   todo => todo.id !== todoIdToDelete  // generate true/false
    // );
    // // overwrite the old state with new state
    // this.setState({ todos: newTodoList });
  };

  handleCreate = (event) => {
    // event.key
    if (event.key === "Enter") {  
      this.props.addTodo(this.state.value);
      this.setState({ value: "" });
    }
  };

  // handleToggle = todoIdToToggle => {

  // };

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  };

  handleClear = (event) => {
    const newTodoList = this.state.todos.filter(
      todo => todo.completed === false
    );
    this.setState({ todos: newTodoList });
  };


  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>To Do's</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onKeyDown={this.handleCreate}
            onChange={this.handleChange}
            value={this.state.value}
          />
        </header>
        <Route
          exact
          path="/"
          render={() => (
            <TodoList
              handleClear={this.handleClear}
              handleDelete={this.handleDelete}
              todos={this.props.todos}
            />
          )}
        />
        <Route
          path="/active"
          render={() => (
            <TodoList
              handleClear={this.handleClear}
              handleDelete={this.handleDelete}
              todos={this.props.todos.filter(todo => todo.completed === false)}
            />
          )}
        />
        <Route
          path="/completed"
          render={() => (
            <TodoList
              handleClear={this.handleClear}
              handleDelete={this.handleDelete}
              todos={this.props.todos.filter(todo => todo.completed === true)}
            />
          )}
        />
        <footer className="footer">
          {/* <!-- This should be `0 items left` by default --> */}
          <span className="todo-count">
            <strong>{this.props.todos.filter(todo => todo.completed !== true).length}</strong> item(s) left
          </span>
          <ul className="filters">
            <li>
              <NavLink exact to="/" activeClassName="selected">
                All
                </NavLink>
            </li>
            <li>
              <NavLink to="/active" activeClassName="selected">
                Active
                </NavLink>
            </li>
            <li>
              <NavLink to="/completed" activeClassName="selected">
                Completed
                </NavLink>
            </li>
          </ul>
          <button onClick={this.props.clearCompletedTodos} className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }
}


//mapStateToProps
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}
//mapDispatchToProps
// store.dispatch
// add "addTodo" as a prop to the component 
// When we call "this.props.addTodo", it will make sure to call store.dispatch(addTodo())
const mapDispatchToProps = {
  addTodo, clearCompletedTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(App);