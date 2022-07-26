"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var port = process.env.PORT;
app.get('/', function (req, res) {
  res.send('Express + TypeScript Server');
});
app.listen(port, function () {
  console.log("[server]: Server is running at http://localhost:".concat(port));
});