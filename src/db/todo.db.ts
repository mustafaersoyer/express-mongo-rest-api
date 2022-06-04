import { ITodo, Todo } from "../models/todo.model";
const redis = require("redis");
const util = require("util");
const client = redis.createClient({
  url: "redis://default:redispw@localhost:55001",
});
client.connect();
client.get = util.promisify(client.get).bind(client);

const createTodoDb = async (todo: ITodo) => {
  try {
    const newTodo = new Todo(todo);
    await newTodo.save(function (err: any, todo: ITodo) {
      if (err) {
        console.log(err);
      }
      writeToRedis(todo._id, todo);
    });

    return newTodo;
  } catch (error) {
    console.log(error);
  }
};

const writeToRedis = async (id: string, todo: ITodo) => {
  const client = redis.createClient("redis://default:redispw@localhost:55001");

  redis.set(
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
    const cachedTodo = await client.get("todo:" + id);
    if (cachedTodo !== null) {
      return cachedTodo;
    }
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
