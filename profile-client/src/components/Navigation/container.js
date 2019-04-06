import React from "react";
import Navigation from "./presenter";

// TODO: If the user is logged in, call API

const Container = props => {
  //console.log(props.isAuthenticated);
  return <Navigation {...props} />;
};

export default Container;
