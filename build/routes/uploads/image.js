"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _middlewares = require("../../middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post("/", _middlewares.uploadImage, function (req, res, next) {
  res.send(req.file.location);
});
var _default = router;
exports["default"] = _default;