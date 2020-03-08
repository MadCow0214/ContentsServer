"use strict";

require("./env");

require("@babel/polyfill");

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 4000;

var handleListening = function handleListening() {
  console.log("Listen on port: http://localhost:".concat(PORT));
};

_app["default"].listen(PORT, handleListening);