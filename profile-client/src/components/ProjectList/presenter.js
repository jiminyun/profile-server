import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Projects = props => {
  const {
    projects,
    hasErrored,
    isLoading,
    setEditClick,
    delProjectClick
  } = props;
  //console.log("presenter", props);

  if (hasErrored) {
    return <p>Sorry! There was an error loading the items</p>;
  }

  if (isLoading) {
    return <p>Loading…</p>;
  }

  const ListItem = props => {
    return (
      <div className="item">
        {props.title}
        <img src={props.project.image} alt="profile-thumnail" />
        <button
          className="btn-del"
          onClick={() => props.delProjectClick(props.project._id)}
        >
          Delete
        </button>
        <button
          className="btn-edit"
          onClick={() => props.setEditClick(props.project)}
          //onClick={props.setEditClick(props.project)}
        >
          Edit
        </button>
      </div>
    );
  };

  const List = props => {
    const { projects, setEditClick } = props;
    console.log("list", projects);
    return projects.map(pjt => (
      <ListItem
        key={pjt._id}
        title={pjt.title}
        project={pjt}
        setEditClick={setEditClick}
        delProjectClick={delProjectClick}
      />
    ));
  };

  return (
    <div className="projects-container">
      <div className="warpper">
        <List
          projects={projects}
          setEditClick={setEditClick}
          delProjectClick={delProjectClick}
        />
      </div>
    </div>
  );
};

export default Projects;
