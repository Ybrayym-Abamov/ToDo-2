import React, { Component } from "react";
import "./index.css";
class TodoItem extends Component {
    // this.props.handleDelete
    // this.props.handleToggle
    render() {
      return (
        <li className={this.props.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={this.props.completed}
              onChange={this.props.handleToggle}
            />
            <label>{this.props.title}</label>
            <button className="destroy"
              onClick={this.props.handleDelete}
            />
          </div>
        </li>
      );
    }
  }

  export default TodoItem;