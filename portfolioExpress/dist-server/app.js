"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _path = require("path");
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _morgan = _interopRequireDefault(require("morgan"));
var _index = _interopRequireDefault(require("./routes/index"));
var _users = _interopRequireDefault(require("./routes/users"));
var _mustacheExpress = _interopRequireDefault(require("mustache-express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// view

var app = (0, _express["default"])();

// Set up view engine
app.set("views", (0, _path.join)(__dirname, "../views"));
app.set("view engine", "mustache");
app.engine("mustache", (0, _mustacheExpress["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"]((0, _path.join)(__dirname, "../public")));
app.use("/", _index["default"]);
app.use("/users", _users["default"]);
var _default = exports["default"] = app;