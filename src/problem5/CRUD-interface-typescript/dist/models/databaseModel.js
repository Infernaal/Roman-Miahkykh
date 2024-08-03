"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
const sqlite_1 = require("sqlite");
const dbOpen = (0, sqlite_1.open)({
    filename: 'sqlite.db',
    driver: sqlite3_1.default.Database
});
exports.default = dbOpen;
