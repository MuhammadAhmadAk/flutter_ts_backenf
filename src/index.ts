import express, { Express } from "express";
import http from "http"
import cors from 'cors';
import bodyParser from "body-parser";
import router from "./Routes/routes";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app: Express = express();
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('PORT', 8000);
app.set('BASE_URL', '192.168.1.14');

dotenv.config();

app.use("/api/v1", router);

const mongoUrl = process.env.MONGO_DB_URI
if (!mongoUrl) {
    console.log(`MongoDB Url is not define`);
    process.exit(1);

}
mongoose.connect(mongoUrl, {}).then(() => {
    console.log(`MongoDB is connected`);
}).catch((error) => {
    console.log(`Error : ${error}`);
});
//start server
try {
    const port = app.get('PORT');
    const baseUrl: String = app.get('BASE_URL');
    server.listen(port, (): void => {
        console.log(`server is start`);
        console.log(`http://${baseUrl}:${port}`);
    })
} catch (error) {
    console.log(error);
}