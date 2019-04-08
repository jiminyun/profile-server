"use strict";

require("./config");

require("./db");

var _app = _interopRequireDefault(require("./app"));

require("./models/Project");

require("./models/User");

require("./models/Blog");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 4000;

var handleListening = function handleListening() {
  return console.log("\u2705  Listening on http://localhost:".concat(PORT));
};

_app["default"].listen(PORT, handleListening);