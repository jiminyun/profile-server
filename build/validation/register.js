"use strict";

var _validator = _interopRequireDefault(require("validator"));

var _isEmpty = _interopRequireDefault(require("./is-empty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function validateRegisterInput(data) {
  var errors = {};
  data.name = !(0, _isEmpty["default"])(data.name) ? data.name : "";
  data.email = !(0, _isEmpty["default"])(data.email) ? data.email : "";
  data.password = !(0, _isEmpty["default"])(data.password) ? data.password : "";
  data.password_confirm = !(0, _isEmpty["default"])(data.password_confirm) ? data.password_confirm : "";

  if (!_validator["default"].isLength(data.name, {
    min: 2,
    max: 30
  })) {
    errors.name = "Name must be between 2 to 30 chars";
  }

  if (_validator["default"].isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (!_validator["default"].isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (_validator["default"].isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (!_validator["default"].isLength(data.password, {
    min: 6,
    max: 30
  })) {
    errors.password = "Password must have 6 chars";
  }

  if (_validator["default"].isEmpty(data.password)) {
    errors.password = "Password1 is required";
  }

  if (!_validator["default"].isLength(data.password_confirm, {
    min: 6,
    max: 30
  })) {
    errors.password_confirm = "Password must have 6 chars";
  }

  if (!_validator["default"].equals(data.password, data.password_confirm)) {
    errors.password_confirm = "Password and Confirm Password must match";
  }

  if (_validator["default"].isEmpty(data.password_confirm)) {
    errors.password_confirm = "Password2 is required";
  }

  return {
    errors: errors,
    isValid: (0, _isEmpty["default"])(errors)
  };
};