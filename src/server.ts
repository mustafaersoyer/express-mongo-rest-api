import express, { Request, Response } from "express";
const { connectMongo, disconnectMongo } = require("./db/mongo");

const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api", routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

connectMongo();
