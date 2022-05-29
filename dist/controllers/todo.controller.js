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
exports.deleteTodo = exports.updateTodo = exports.getTodoById = exports.getTodos = exports.createTodo = void 0;
const services_1 = require("../services");
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //TODO bodymen validation
        const todo = yield services_1.todoService.createTodo(req.body);
        res.status(200).json(todo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});
exports.createTodo = createTodo;
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield services_1.todoService.getTodos();
        res.status(200).json(todos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});
exports.getTodos = getTodos;
const getTodoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = yield services_1.todoService.getTodoById(id);
        res.status(200).json(todo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});
exports.getTodoById = getTodoById;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = yield services_1.todoService.updateTodo(id, req.body);
        res.status(200).json(todo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = yield services_1.todoService.deleteTodo(id);
        res.status(200).json(todo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});
exports.deleteTodo = deleteTodo;
