import { Router, Request, Response } from "express";

const helloRouter = Router();

helloRouter.get("/", (request: Request, response: Response) => {
    response.json({ "data": "server is Live..........." });
});
export default helloRouter;