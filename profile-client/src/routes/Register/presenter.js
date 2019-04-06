import React from "react";
import Navigation from "components/Navigation";
import "./styles.scss";
import "../../shared/formStyles.scss";
import classnames from "classnames";

const Register = props => {
  const { errors } = props;

  return (
    <div className="register-container">
      <div className="column_left">
        <h2>`// Sign up` </h2>
        <div className="form-container">
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.name
              })}
              name="name"
              onChange={props.handleInputChange}
              value={props.name}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}

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
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}

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
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              name="password_confirm"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.password_confirm
              })}
              onChange={props.handleInputChange}
              value={props.password_confirm}
            />
            {errors.password_confirm && (
              <div className="invalid-feedback">{errors.password_confirm}</div>
            )}
            <button type="submit" className="button">
              Register User
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

export default Register;
