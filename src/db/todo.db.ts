import { CallbackError } from "mongoose";
import { ITodo, Todo } from "../models/todo.model";
const redis = require("redis");
const redisClient = redis.createClient({
  url: "redis://default:redispw@localhost:55000",
});
redisClient.connect();

const createTodoDb = async (todo: ITodo) => {
  try {
    const newTodo = new Todo(todo);
    await newTodo.save(function (err: any, todo: ITodo) {
      if (err) console.log(err);
      writeToRedis(todo._id, todo);
    });

    return newTodo;
  } catch (error) {
    console.log(error);
  }
};

const writeToRedis = async (id: string, todo: ITodo) => {
  redisClient.set(
    "todo:" + id,
    JSON.stringify(todo),
    (error: any, result: string | null) => {
      if (error) throw error;
      console.log("write to redis");
    }
  );
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
    const cachedTodo = await redisClient.get("todo:" + id);
    if (cachedTodo !== null && cachedTodo !== undefined) {
      console.log("from cache");
      return JSON.parse(cachedTodo);
    }
    console.log("from db");
    return await Todo.findById(id);
  } catch (error) {
    console.log(error);
  }
};

const updateTodoDb = async (id: string, todo: ITodo) => {
  try {
    const updatedTodo = await Todo.findOneAndUpdate({ _id: id }, todo, {
      new: true,
    });
    const newTodo: ITodo = { title: todo.title, _id: id };
    writeToRedis(id, newTodo);
    return updatedTodo;
  } catch (error) {
    console.log(error);
  }
};

const deleteTodoDb = (id: string) => {
  try {
    redisClient.del("todo:" + id);
    return Todo.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
};

export { createTodoDb, getTodosDb, getTodoById, updateTodoDb, deleteTodoDb };
