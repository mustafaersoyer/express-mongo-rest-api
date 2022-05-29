import express = require("express");

import { todo } from "../controllers";

const router = express.Router();

router.post("/todo", todo.createTodo);
router.get("/todo", todo.getTodos);
router.get("/todo/:id", todo.getTodoById);
router.put("/todo/:id", todo.updateTodo);
router.delete("/todo/:id", todo.deleteTodo);

export { router };
