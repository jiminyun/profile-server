import React from "react";
import ProjectForm from "components/ProjectForm";
import ProjectList from "components/ProjectList";
import Navigation from "components/Navigation";
import "./styles.scss";
const AdminPresenter = () => {
  return (
    <div className="admin-container">
      <div className="column_left">
        <Navigation />
        <h2>`// Regist Project` </h2>
        <ProjectForm />
      </div>

      <div className="column_right">
        <h2>`// List` </h2>
        <ProjectList />
      </div>
    </div>
  );
};

export default AdminPresenter;
