"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var router = (0, _express.Router)();

/* GET home page. */
router.get("/", function (req, res, next) {
  var role = "Front End Developer";
  var skills = ["HTML", "CSS", "Javascript", "Nodejs", "React", "Tailwind", "Svelte", "Nextjs", "Gatsby", "Bootstrap", "Nestjs"];
  res.render("index", {
    role: role,
    skills: skills
  });
});
router.get("/hx-filter/:id", function (req, res, next) {});
var _default = exports["default"] = router;