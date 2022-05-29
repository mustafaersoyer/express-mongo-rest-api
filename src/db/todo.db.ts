import { ITodo, Todo } from "../models/todo.model";

const createTodoDb = async (todo: ITodo) => {
  try {
    const newTodo = new Todo(todo);
    await newTodo.save();
    return newTodo;
  } catch (error) {
    console.log(error);
  }
};

const getTodosDb = async () => {
  try {
    return await Todo.find();
  } catch (error) {
    console.log(error);
  }
};

const getTodoById = async (id: string) => {
  try {
    return await Todo.findById(id);
  } catch (error) {
    console.log(error);
  }
};

const updateTodoDb = async (id: string, todo: ITodo) => {
  //itodo tipinde vermeyince hata vermesi gerekmiyor mu?
  try {
    const updatedTodo = await Todo.findOneAndUpdate({ _id: id }, todo);
    return updatedTodo;
  } catch (error) {
    console.log(error);
  }
};

const deleteTodoDb = (id: string) => {
  try {
    return Todo.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
};

export { createTodoDb, getTodosDb, getTodoById, updateTodoDb, deleteTodoDb };
