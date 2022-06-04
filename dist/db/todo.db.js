"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoDb = exports.updateTodoDb = exports.getTodoById = exports.getTodosDb = exports.createTodoDb = void 0;
const todo_model_1 = require("../models/todo.model");
const redis = require("redis");
const util = require("util");
const createTodoDb = (todo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTodo = new todo_model_1.Todo(todo);
        yield newTodo.save(function (err, todo) {
            if (err) {
                console.log(err);
            }
            writeToRedis(todo._id, todo);
        });
        return newTodo;
    }
    catch (error) {
        console.log(error);
    }
});
exports.createTodoDb = createTodoDb;
const writeToRedis = (id, todo) => __awaiter(void 0, void 0, void 0, function* () {
    const client = redis.createClient("redis://default:redispw@localhost:55000");
    redis.set("todo:" + id, JSON.stringify(todo), (error, result) => {
        if (error)
            throw error;
        console.log("write to redis");
    });
});
const getTodosDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield todo_model_1.Todo.find();
    }
    catch (error) {
        console.log(error);
    }
});
exports.getTodosDb = getTodosDb;
const getTodoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cachedTodo = yield getFromRedis(id);
        if (cachedTodo !== null) {
            return cachedTodo;
        }
        return yield todo_model_1.Todo.findById(id);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getTodoById = getTodoById;
const getFromRedis = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const client = redis.createClient({
        url: "redis://default:redispw@localhost:55000",
    });
    client.get = util.promisify(client.get);
    yield client.connect();
    yield client.get("todo:" + id, (error, result) => {
        if (error)
            console.log(error);
        if (result !== null) {
            //return res.json(JSON.parse(result));
            console.log("from redis");
            console.log(result + "asd");
            return result + "asd";
        }
        else {
            console.log("from db");
            return null;
        }
    });
});
const updateTodoDb = (id, todo) => __awaiter(void 0, void 0, void 0, function* () {
    //itodo tipinde vermeyince hata vermesi gerekmiyor mu?
    try {
        const updatedTodo = yield todo_model_1.Todo.findOneAndUpdate({ _id: id }, todo);
        return updatedTodo;
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateTodoDb = updateTodoDb;
const deleteTodoDb = (id) => {
    try {
        return todo_model_1.Todo.findByIdAndDelete(id);
    }
    catch (error) {
        console.log(error);
    }
};
exports.deleteTodoDb = deleteTodoDb;
