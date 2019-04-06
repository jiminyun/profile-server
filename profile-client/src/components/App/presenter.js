import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "routes/Home";
import Admin from "routes/Admin";
import Blog from "routes/Blog";
import Project from "routes/Project";
import Register from "routes/Register";
import Login from "routes/Login";
import Header from "components/Header";
import "./styles.scss";

const router = props => [
  <Header />,
  props.isAuthenticated ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />
];

const PrivateRoutes = props => (
  <Switch>
    <Route path="/admin" exact component={Admin} />
    <Route path="/register" exact component={Register} />
    <Route path="/login" exact component={Login} />
    <Route path="/" exact component={Home} />
    <Route path="/blog" exact component={Blog} />
    <Route path="/projects" exact component={Project} />
    <Redirect from="*" to="/" />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/blog" exact component={Blog} />
    <Route path="/projects" exact component={Project} />
    <Route path="/login" exact component={Login} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default router;
