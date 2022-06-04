"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { connectMongo, disconnectMongo } = require("./db/mongo");
const swaggerUi = require("swagger-ui-express"), swaggerDocument = require("../swagger.json");
const bodyParser = require("body-parser");
const app = (0, express_1.default)();
const routes_1 = require("./routes");
const compression = require("compression");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/api", routes_1.router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(compression());
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
connectMongo();
