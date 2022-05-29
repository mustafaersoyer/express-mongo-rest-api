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
const createTodoDb = (todo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTodo = new todo_model_1.Todo(todo);
        yield newTodo.save();
        return newTodo;
    }
    catch (error) {
        console.log(error);
    }
});
exports.createTodoDb = createTodoDb;
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
        return yield todo_model_1.Todo.findById(id);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getTodoById = getTodoById;
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
