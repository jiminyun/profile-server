import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as projectAction } from "redux/reducer/projects";

const mapStateToProps = (state, ownProps) => {
  const {
    projects: { projectToEdit }
  } = state;
  return {
    projectToEdit
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveProject: project => {
      dispatch(projectAction.saveProject(project));
    },
    updateProject: (id, project) => {
      dispatch(projectAction.updateProject(id, project));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
