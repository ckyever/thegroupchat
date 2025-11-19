import { Router } from "express";
import { messages, postMessage } from "../models/messasges.js";

let username = "Anonymous";

const indexRouter = Router();
indexRouter.get("/", (req, res) => {
  res.render("username");
});

indexRouter.get("/chat", (req, res) => {
  res.render("chat", { username: username, messages: messages });
});

indexRouter.post("/username", (req, res) => {
  username = req.body.username;
  res.redirect("/chat");
});

indexRouter.post("/new", (req, res) => {
  postMessage(req.body.messageText, username);
  res.redirect("/chat");
});

export { indexRouter };
