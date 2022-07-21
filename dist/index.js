"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./api/index");
//
const app = (0, express_1.default)();
app.use("/api/img", index_1.routes);
/* --------------------- */
const port = 3000;
app.listen(port, () => {
    process.stdout.write(`server started at --> http://localhost:${port}\n`);
});
/* ==================================== */
exports.default = app;
