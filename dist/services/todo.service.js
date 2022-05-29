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
exports.updateTodo = exports.getTodoById = exports.deleteTodo = exports.getTodos = exports.createTodo = void 0;
const index_1 = require("../db/index");
const createTodo = (todo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield index_1.todoDb.createTodoDb(todo);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createTodo = createTodo;
const getTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield index_1.todoDb.getTodosDb();
    }
    catch (error) {
        console.log(error);
    }
});
exports.getTodos = getTodos;
const getTodoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield index_1.todoDb.getTodoById(id);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getTodoById = getTodoById;
const updateTodo = (id, todo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield index_1.todoDb.updateTodoDb(id, todo);
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield index_1.todoDb.deleteTodoDb(id); //isme göre de hata vermiyor bu şekilde
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteTodo = deleteTodo;
