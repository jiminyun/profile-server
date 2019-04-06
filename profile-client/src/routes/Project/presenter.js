import React from "react";
import "./styles.scss";
import Navigation from "components/Navigation";
import Video from "components/Video";
import Sidebar from "components/Side";

const ProjectPresenter = props => {
  const {
    projects,
    hasErrored,
    isLoading,
    setEditClick,
    delProjectClick,
    openVideoClick,
    closeVideoClick,
    openVideo,
    videoPath
  } = props;

  if (hasErrored) {
    return <p>Sorry! There was an error loading the items</p>;
  }

  if (isLoading) {
    return <p>Loading…</p>;
  }

  const ListItem = props => {
    return (
      <div className="grid">
        <span className="title">{props.project.title}</span>
        <a href={props.project.video} target="blank">
          <i className="fab fa-github" />
        </a>
        <div className="grid-item">
          <img
            className="projectImg"
            src={props.project.image}
            alt="profile-thumnail"
          />
          <div className="overlay">
            <div className="icon">
              <i
                className="fas fa-play-circle"
                onClick={() => openVideoClick(props.project.video)}
              />
            </div>
          </div>
        </div>
        <div className="tech-container">
          {props.project.usedTechs.map(tech => (
            <div className={`tec ${tech}`} key={tech}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const List = props => {
    const { projects, setEditClick, delProjectClick, openVideo } = props;
    return projects.map(project => (
      <ListItem
        key={project._id}
        project={project}
        setEditClick={setEditClick}
        delProjectClick={delProjectClick}
        openVideo={openVideo}
        openVideoClick={openVideoClick}
      />
    ));
  };

  return (
    <div className="home-container">
      <div className="column_left">
        <h2>`// PROJECTS` </h2>
        <div className="grid-container">
          <List
            projects={projects}
            setEditClick={setEditClick}
            delProjectClick={delProjectClick}
            openVideo={openVideo}
            openVideoClick={openVideoClick}
          />
          {openVideo && (
            <Video videoPath={videoPath} closeVideoClick={closeVideoClick} />
          )}
        </div>
      </div>
      <div className="column_right">
        <Navigation />
        <Sidebar />
      </div>
    </div>
  );
};

export default ProjectPresenter;
