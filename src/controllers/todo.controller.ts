import { Request, Response } from "express";

import { todoService } from "../services";

const createTodo = async (req: Request, res: Response) => {
  try {
    //TODO bodymen validation
    const todo = await todoService.createTodo(req.body);

    res.status(200).json(todo);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await todoService.getTodos();
    res.status(200).json(todos);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const getTodoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await todoService.getTodoById(id);
    res.status(200).json(todo);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await todoService.updateTodo(id, req.body);
    res.status(200).json(todo);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await todoService.deleteTodo(id);
    res.status(200).json(todo);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export { createTodo, getTodos, getTodoById, updateTodo, deleteTodo };
