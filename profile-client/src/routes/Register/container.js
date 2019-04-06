import React, { Component } from "react";
import Register from "./presenter";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirm: "",
      errors: {}
    };
    console.log("0.constructor");
    console.log(this.props);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("2. componentWillReceiveProps");
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    return (
      <Register
        {...this.state}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { name, email, password, password_confirm } = this.state;
    const { registerUser } = this.props;

    //console.log(this.state);

    e.preventDefault();
    const user = {
      name,
      email,
      password,
      password_confirm
    };
    //console.log(user);
    registerUser(user, this.props.history);
  };
}
