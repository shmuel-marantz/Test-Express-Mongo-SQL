import express from "express";
import { encryptMessage  } from "../controllers/messages.js";

const router = express.Router();

router.route("/")
//   .get(getTodos)
  .post(encryptMessage);
// router.route("/:id")
//   .get(getTodo)
//   .put(updateTodo)
//   .delete(deleteTodo)

export default router;
