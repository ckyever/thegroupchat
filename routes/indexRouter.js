import { Router } from "express";

const messages = [
  {
    text: "First!",
    user: "ckyzo",
    added: new Date(),
  },
  {
    text: "Second?!",
    user: "chanpan",
    added: new Date(),
  },
];

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

export { indexRouter };
