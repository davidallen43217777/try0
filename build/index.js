"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.port = exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
exports.app = app;
var port = process.env.PORT;
exports.port = port;
app.get('/', function (req, res) {
  res.send('OJ 1234');
});
app.listen(port, function () {
  console.log("[server]: Server is running at http://localhost:".concat(port));
});