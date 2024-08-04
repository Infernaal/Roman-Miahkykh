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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResource = createResource;
exports.readResource = readResource;
exports.getInfoFromResourceId = getInfoFromResourceId;
exports.updateResource = updateResource;
exports.deleteResource = deleteResource;
const databaseModel_1 = __importDefault(require("./databaseModel"));
;
function createResource(resource) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield databaseModel_1.default;
        const resultCreate = yield db.run('INSERT INTO resources (name, description, category) VALUES (?, ?, ?)', resource.name, resource.description, resource.category);
        return Object.assign({ id: resultCreate.lastID }, resource);
    });
}
function readResource() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield databaseModel_1.default;
        const resultRead = yield db.all('SELECT * FROM resources');
        return resultRead;
    });
}
function getInfoFromResourceId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield databaseModel_1.default;
        const resultGetId = yield db.get('SELECT * FROM resources WHERE id = ?', id);
        return resultGetId;
    });
}
function updateResource(id, resource) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield databaseModel_1.default;
        yield db.run('UPDATE resources SET name = ?, description = ?, category = ? WHERE id = ?', resource.name, resource.description, resource.category, id);
        return Object.assign({ id }, resource);
    });
}
function deleteResource(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield databaseModel_1.default;
        yield db.run('DELETE FROM resources WHERE id = ?', id);
    });
}
