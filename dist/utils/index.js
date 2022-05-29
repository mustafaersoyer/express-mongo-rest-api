"use strict";
//this functions are completely written by Github Copilot :)
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStrongPassword = exports.isEmail = void 0;
const isEmail = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};
exports.isEmail = isEmail;
//get a function that returns true or false if the password is strong
const isStrongPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return regex.test(password);
};
exports.isStrongPassword = isStrongPassword;
