import { ITodo } from "../models/todo.model";
const { todoDb } = require("../db");

const createTodo = async (todo: ITodo) => {
  try {
    return await todoDb.createTodoDb(todo);
  } catch (error) {
    console.log(error);
  }
};

const getTodos = async () => {
  try {
    return await todoDb.getTodosDb();
  } catch (error) {
    console.log(error);
  }
};

const getTodoById = async (id: number) => {
  try {
    return await todoDb.getTodoById(id);
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (id: number, todo: ITodo, content: String) => {
  try {
    return await todoDb.updateTodo(id, todo, content);
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (id: number) => {
  try {
    return await todoDb.deleteTodo(id);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createTodo, getTodos, deleteTodo, getTodoById, updateTodo };
