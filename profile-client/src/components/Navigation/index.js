import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userAction } from "redux/actions/authentication";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  const {
    auth: { isAuthenticated }
  } = state;
  return {
    isAuthenticated
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logoutUser: hitory => {
      //console.log(hitory);
      dispatch(userAction.logoutUser(hitory));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
