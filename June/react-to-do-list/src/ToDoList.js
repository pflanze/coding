import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          <li>Todo 1</li>
          <li>Todo 2</li>

        </ul>
      </div>
    );
  }
}

export default TodoList;