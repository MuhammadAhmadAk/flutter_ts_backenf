"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const helloRouter = (0, express_1.Router)();
helloRouter.get("/", (request, response) => {
    response.json({ "data": "server is Live..........." });
});
exports.default = helloRouter;
