import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as projectAction } from "redux/reducer/projects";

const mapStateToProps = (state, ownProps) => {
  const {
    projects: { projects }
  } = state;
  return {
    projects,
    hasErrored: state.projectsHasErrored,
    isLoading: state.projectsIsLoading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProjects: () => {
      dispatch(projectAction.projectFetchData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
