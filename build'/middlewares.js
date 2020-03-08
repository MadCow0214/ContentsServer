"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadImageMiddleware = exports.uploadVideoMiddleware = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _multerS = _interopRequireDefault(require("multer-s3"));

var _s = _interopRequireDefault(require("aws-sdk/clients/s3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var s3 = new _s["default"]({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
  region: "ap-northeast-2"
});
var multerVideo = (0, _multer["default"])({
  storage: (0, _multerS["default"])({
    s3: s3,
    acl: "public-read",
    bucket: "sonhansung-contents/video"
  })
});
var multerAvatar = (0, _multer["default"])({
  storage: (0, _multerS["default"])({
    s3: s3,
    acl: "public-read",
    bucket: "sonhansung-contents/image"
  })
});
var uploadVideoMiddleware = multerVideo.single("video");
exports.uploadVideoMiddleware = uploadVideoMiddleware;
var uploadImageMiddleware = multerAvatar.single("image");
exports.uploadImageMiddleware = uploadImageMiddleware;