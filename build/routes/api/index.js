"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _project = _interopRequireDefault(require("./project"));

var _user = _interopRequireDefault(require("./user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use("/projects", _project["default"]);
router.use("/users", _user["default"]);
var _default = router;
exports["default"] = _default;