"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _passport = _interopRequireDefault(require("passport"));

var _cors = _interopRequireDefault(require("cors"));

require("./passport");

var _routes = _interopRequireDefault(require("./routes"));

var _errorhandler = _interopRequireDefault(require("errorhandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//middlewares
//import MongoStore from "connect-mongo";
//routes
var isProduction = process.env.NODE_ENV === "production";
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _cookieParser["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _helmet["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
app.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));
app.use((0, _expressSession["default"])({
  secret: process.env.COOKIE_SECRET,
  cookie: {
    maxAge: 60000
  },
  resave: true,
  saveUninitialized: false
}));
app.use(_routes["default"]);
var _default = app;
exports["default"] = _default;