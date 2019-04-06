import React from "react";
import "./styles.scss";

const Video = props => {
  // console.log(props.video);
  return (
    <div className="video-container">
      <i
        class="fa fa-window-close"
        aria-hidden="true"
        onClick={props.closeVideoClick}
      >
        close
      </i>
      <div className="videoPlayer">
        <video width="80%" controls autoPlay>
          <source src={props.videoPath} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Video;
