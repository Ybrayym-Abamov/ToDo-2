import React, { Component } from "react";
import {connect} from 'react-redux'
import { toggleDelete } from './actions'

class TodoItem extends Component {
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
            onClick={event => this.props.toggleDelete(this.props.id)}
          />
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = {
  toggleDelete
}

export default connect(null, mapDispatchToProps)(TodoItem);