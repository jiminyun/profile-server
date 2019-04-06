import React from "react";
import PropTypes from "prop-types";
import Projects from "./presenter";

export default class extends React.Component {
  static propTypes = {
    getProjects: PropTypes.func.isRequired
  };

  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.props);
    const { getProjects } = this.props;
    getProjects();
  }

  render() {
    return <Projects {...this.props} />;
  }
}
