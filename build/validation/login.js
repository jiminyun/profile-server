"use strict";

var _validator = _interopRequireDefault(require("validator"));

var _isEmpty = _interopRequireDefault(require("./is-empty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function validateLoginInput(data) {
  var errors = {};
  data.email = !(0, _isEmpty["default"])(data.email) ? data.email : "";
  data.password = !(0, _isEmpty["default"])(data.password) ? data.password : "";

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
    errors.password = "Password is required";
  }

  return {
    errors: errors,
    isValid: (0, _isEmpty["default"])(errors)
  };
};