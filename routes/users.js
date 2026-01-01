import express from "express";
import {registerUser} from "../controllers/users.js";

const router = express.Router();

router.route("/register")
//   .get(getTodos)
  .post(registerUser);
// router.route("/:id")
//   .get(getTodo)
//   .put(updateTodo)
//   .delete(deleteTodo);

export default router;