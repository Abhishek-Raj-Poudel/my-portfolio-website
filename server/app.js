import express from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

// view
import mustache from "mustache-express";
var app = express();

// Set up view engine
app.set("views", join(__dirname, "../views"));
app.set("view engine", "mustache");
app.engine("mustache", mustache());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

export default app;
