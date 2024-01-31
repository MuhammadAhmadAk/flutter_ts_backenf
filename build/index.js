"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./Routes/routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.set('PORT', 8000);
app.set('BASE_URL', '192.168.1.14');
dotenv_1.default.config();
app.use("/api/v1", routes_1.default);
const mongoUrl = process.env.MONGO_DB_URI;
if (!mongoUrl) {
    console.log(`MongoDB Url is not define`);
    process.exit(1);
}
mongoose_1.default.connect(mongoUrl, {}).then(() => {
    console.log(`MongoDB is connected`);
}).catch((error) => {
    console.log(`Error : ${error}`);
});
//start server
try {
    const port = app.get('PORT');
    const baseUrl = app.get('BASE_URL');
    server.listen(port, () => {
        console.log(`server is start`);
        console.log(`http://${baseUrl}:${port}`);
    });
}
catch (error) {
    console.log(error);
}
