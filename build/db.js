"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false
});

var db = _mongoose["default"].connection;

_mongoose["default"].set("debug", true);

var handleOpen = function handleOpen() {
  return console.log("✅  Connected to DB");
};

var handleError = function handleError(error) {
  return console.log("❌  Error on DB Connection" + error);
};

db.once("open", handleOpen);
db.on("error", handleError);