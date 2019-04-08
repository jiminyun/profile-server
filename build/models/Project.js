"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProjectShema = new _mongoose["default"].Schema({
  title: {
    type: String,
    required: "Title is required"
  },
  git_link: {
    type: String
  },
  image: {
    type: String
  },
  video: {
    type: String
  },
  description: String,
  detail_a: String,
  detail_b: String,
  category: String,
  status: {
    type: String
  },
  usedTechs: {
    type: Array,
    "default": ["react", "mongodb", "node", "graphql", "apollo", "vanila js", "react-naitive", "prisma", "aws", "s3", "express", "redux", "styled components", "axios"]
  },
  createAt: {
    type: Date,
    "default": Date.now
  },
  creator: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User"
  }
});

ProjectShema.methods.toJSON = function () {
  return {
    _id: this._id,
    title: this.title,
    git_link: this.git_link,
    image: this.image,
    video: this.video,
    description: this.description,
    detail_a: this.detail_a,
    detail_b: this.detail_b,
    category: this.category,
    status: this.status,
    usedTechs: this.usedTechs,
    createAt: this.createAt
  };
};

var model = _mongoose["default"].model("Project", ProjectShema);

var _default = model;
exports["default"] = _default;