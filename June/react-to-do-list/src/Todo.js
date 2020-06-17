import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
  }
}
