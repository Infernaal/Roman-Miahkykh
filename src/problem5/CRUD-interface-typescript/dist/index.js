"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const databaseModel_1 = __importDefault(require("../src/models/databaseModel"));
const resourceRoutes_1 = __importDefault(require("../src/routes/resourceRoutes"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use('/api', resourceRoutes_1.default);
databaseModel_1.default.then(db => {
    db.run('CREATE TABLE IF NOT EXISTS resources (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, description TEXT, category TEXT)').then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    });
}).catch(err => {
    console.error('Failed to inizialize database. Error: ', err);
});
