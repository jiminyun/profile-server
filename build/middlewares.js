"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadImage = exports.uploadVideo = exports.multerImage = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _multerS = _interopRequireDefault(require("multer-s3"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var s3 = new _awsSdk["default"].S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
  region: "ap-northeast-1"
});
var multerVideo = (0, _multer["default"])({
  storage: (0, _multerS["default"])({
    s3: s3,
    acl: "public-read",
    bucket: "j-profile/project"
  })
});
var multerImage = (0, _multer["default"])({
  storage: (0, _multerS["default"])({
    s3: s3,
    acl: "public-read",
    bucket: "j-profile/project"
  })
}); //const image = multer({ dest: "uploads/image" });

exports.multerImage = multerImage;
var uploadVideo = multerVideo.single("video");
exports.uploadVideo = uploadVideo;
var uploadImage = multerImage.single("filepond");
exports.uploadImage = uploadImage;