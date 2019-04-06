import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const {
    auth: { isAuthenticated }
  } = state;
  return {
    isAuthenticated
  };
};

export default connect(mapStateToProps)(Container);
