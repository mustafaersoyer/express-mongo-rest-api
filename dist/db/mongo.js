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
exports.disconnectMongo = exports.connectMongo = void 0;
const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;
mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected");
});
mongoose.connection.on("error", (err) => {
    console.log(err);
});
function connectMongo() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose.connect(MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.connectMongo = connectMongo;
function disconnectMongo() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose.disconnect();
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.disconnectMongo = disconnectMongo;
