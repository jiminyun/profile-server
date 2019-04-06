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

const router = props => [
  props.isLoggedIn ? (
    <Router>
      <PrivateRoutes key={2} />{" "}
    </Router>
  ) : (
    <Router>
      <PublicRoutes key={2} />
    </Router>
  )
];

const PrivateRoutes = props => (
  <Switch>
    <Route path="/admin" exact component={Admin} />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/blog" exact component={Blog} />
    <Route path="/projects" exact component={Project} />
    <Route path="/register" exact component={Register} />
    <Route path="/login" exact component={Login} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default router;
