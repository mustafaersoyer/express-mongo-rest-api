import { Schema, model, Document } from "mongoose";

export interface ITodo {
  title: string;
  _id: string;
}

const todoSchema = new Schema<ITodo>({
  title: String,
});

export const Todo = model<ITodo>("Todo", todoSchema);
