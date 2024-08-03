"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const resourceController_1 = require("../controllers/resourceController");
exports.router = express_1.default.Router();
exports.router.post('/', resourceController_1.createResource);
exports.router.get('/', resourceController_1.readResource);
exports.router.get('/:id', resourceController_1.getInfoFromResourceId);
exports.router.put('/:id', resourceController_1.updateResource);
exports.router.delete('/:id', resourceController_1.deleteResource);
exports.default = exports.router;
