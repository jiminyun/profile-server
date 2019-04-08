"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _Project = _interopRequireDefault(require("../../models/Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var router = _express["default"].Router();

router.post("/", function (req, res, next) {
  var project = req.body.project;

  if (!project.title) {
    return res.status(422).json({
      errors: {
        title: "is required"
      }
    });
  }

  var newProject = new _Project["default"](project);
  return newProject.save().then(function () {
    return res.json({
      project: newProject.toJSON()
    });
  })["catch"](next);
});
router.get("/", function (req, res, next) {
  return _Project["default"].find().sort({
    createdAt: "descending"
  }).then(function (projects) {
    return res.json({
      projects: projects.map(function (projects) {
        return projects.toJSON();
      })
    });
  })["catch"](next);
});
router.patch("/:id", function (req, res, next) {
  var project = req.body.project;
  var id = req.params.id;

  if (!project.title) {
    return res.status(422).json({
      errors: {
        title: "is required"
      }
    });
  }

  return _Project["default"].findByIdAndUpdate({
    _id: id
  }, _objectSpread({}, project), {
    "new": true
  }).then(function (data) {
    return res.json({
      id: id,
      project: data
    });
  })["catch"](next);
});
router["delete"]("/:id", function (req, res, next) {
  return _Project["default"].findByIdAndRemove(req.params.id).then(function () {
    return res.sendStatus(200);
  })["catch"](next);
});
var _default = router;
exports["default"] = _default;