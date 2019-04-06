import React, { Component } from "react";
import Login from "./presenter";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { loginUser } = this.props;
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    //console.log(user);
    loginUser(user);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  componentDidMount() {
    //console.log(this.props);
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/admin");
    }
  }

  render() {
    //console.log(this.state.errors);
    return (
      <Login
        {...this.state}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
