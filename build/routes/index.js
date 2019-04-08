"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _api = _interopRequireDefault(require("./api"));

var _uploads = _interopRequireDefault(require("./uploads"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use("/api", _api["default"]);
router.use("/uploads", _uploads["default"]);
var _default = router;
exports["default"] = _default;