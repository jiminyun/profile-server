"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _User = _interopRequireDefault(require("../../models/User"));

var _register = _interopRequireDefault(require("../../validation/register"));

var _login = _interopRequireDefault(require("../../validation/login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post("/register", function (req, res, next) {
  var _validateRegisterInpu = (0, _register["default"])(req.body),
      errors = _validateRegisterInpu.errors,
      isValid = _validateRegisterInpu.isValid;

  if (!isValid) {
    return res.status(400).json(errors);
  }

  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      password = _req$body.password,
      password_confirm = _req$body.password_confirm;

  if (password !== password_confirm) {
    return res.status(400).json({
      errors: {
        password: "is not matched"
      }
    });
  } else {
    var user = (0, _User["default"])({
      name: name,
      email: email
    });
    return _User["default"].register(user, password).then(function (user) {
      return res.json(user._id);
    })["catch"](function (next) {
      return res.json({
        name: next.message
      });
    });
  }
});
router.post("/login", function (req, res, next) {
  var _validateLoginInput = (0, _login["default"])(req.body),
      errors = _validateLoginInput.errors,
      isValid = _validateLoginInput.isValid;

  if (!isValid) {
    return res.status(400).json(errors);
  }

  _passport["default"].authenticate("local", function (err, user, info) {
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }

      var payload = {
        id: user._id,
        name: user.name
      };

      _jsonwebtoken["default"].sign(payload, "secret", {
        expiresIn: 3600
      }, function (err, token) {
        if (err) console.error("there is some error in token", err);else {
          res.json({
            success: true,
            token: "Bearer ".concat(token)
          });
        }
      });
    });
  })(req, res, next);
});
var _default = router;
exports["default"] = _default;