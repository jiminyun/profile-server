import React from "react";
import BlogPresenter from "./BlogPresenter";

export default class extends React.Component {
  state = {
    loading: false
  };

  render() {
    return <BlogPresenter />;
  }
}
