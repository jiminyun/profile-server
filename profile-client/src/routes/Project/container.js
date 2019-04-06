import React from "react";
import PropTypes from "prop-types";
import Projects from "./presenter";

export default class extends React.Component {
  static propTypes = {
    getProjects: PropTypes.func.isRequired
  };

  state = {
    openVideo: false,
    videoPath: null
  };
  componentDidMount() {
    const { getProjects } = this.props;
    getProjects();
  }

  render() {
    return (
      <Projects
        {...this.props}
        openVideo={this.state.openVideo}
        openVideoClick={this._openVideoClick}
        closeVideoClick={this._closeVideoClick}
        videoPath={this.state.videoPath}
      />
    );
  }

  _openVideoClick = videoPath => {
    this.setState({
      openVideo: true,
      videoPath
    });
  };

  _closeVideoClick = () => {
    this.setState({
      openVideo: false
    });
  };
}
