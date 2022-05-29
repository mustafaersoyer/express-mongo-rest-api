import { ITodo } from "../models/todo.model";
import { todoDb } from "../db/index";

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

const getTodoById = async (id: string) => {
  try {
    return await todoDb.getTodoById(id);
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (id: string, todo: ITodo) => {
  try {
    return await todoDb.updateTodoDb(id, todo);
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (id: string) => {
  try {
    return await todoDb.deleteTodoDb(id); //isme göre de hata vermiyor bu şekilde
  } catch (error) {
    console.log(error);
  }
};
export { createTodo, getTodos, deleteTodo, getTodoById, updateTodo };
