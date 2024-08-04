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
exports.create = create;
exports.read = read;
exports.getInfoFromId = getInfoFromId;
exports.update = update;
exports.deleteRes = deleteRes;
const resourceModel_1 = require("../models/resourceModel");
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resource = yield (0, resourceModel_1.createResource)(req.body);
            res.status(201).json(resource);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to create resource.' });
        }
    });
}
function read(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resource = yield (0, resourceModel_1.readResource)();
            res.json(resource);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to read resource database.' });
        }
    });
}
function getInfoFromId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resource = yield (0, resourceModel_1.getInfoFromResourceId)(parseInt(req.params.id, 10));
            if (resource) {
                res.json(resource);
            }
            else {
                res.status(404).json({ error: 'Resource not found.' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to get resource.' });
        }
    });
}
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resource = yield (0, resourceModel_1.updateResource)(parseInt(req.params.id, 10), req.body);
            if (resource) {
                res.json(resource);
            }
            else {
                res.status(404).json({ error: 'Resource not found.' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to update resource.' });
        }
    });
}
function deleteRes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, resourceModel_1.deleteResource)(parseInt(req.params.id, 10));
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to delete resource.' });
        }
    });
}
