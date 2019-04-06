import React from "react";
import Navigation from "components/Navigation";
import classnames from "classnames";
import "../../shared/formStyles.scss";
import "./styles.scss";

const Login = props => {
  const { errors } = props;

  return (
    <div className="login-container">
      <div className="column_left">
        <h2>`// Login` </h2>
        <div className="form-container">
          <form onSubmit={props.handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.email
              })}
              name="email"
              onChange={props.handleInputChange}
              value={props.email}
            />

            <input
              type="password"
              placeholder="Password"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.password
              })}
              name="password"
              onChange={props.handleInputChange}
              value={props.password}
            />

            <button type="submit" className="button">
              Login User
            </button>
          </form>
        </div>
      </div>

      <div className="column_right">
        <Navigation />
      </div>
    </div>
  );
};

export default Login;
