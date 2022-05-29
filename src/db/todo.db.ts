import { ITodo, Todo } from "../models/todo.model";

const createTodoDb = async (todo: ITodo) => {
  try {
    const newTodo = new Todo(todo);
    await newTodo.save();
    console.log(newTodo);
    return newTodo;
  } catch (error) {
    console.log(error);
  }
};

const getTodosDb = () => {
  // ...
  try {
    return 1;
  } catch (error) {
    console.log(error);
  }
};

const getTodoById = (id: number) => {
  // ...
  try {
    return 1;
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = (id: number) => {
  // ...
  try {
    return 1;
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = (id: number) => {
  // ...
  try {
    return 1;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createTodoDb,
  getTodosDb,
  getTodoById,
  updateTodo,
  deleteTodo,
};
