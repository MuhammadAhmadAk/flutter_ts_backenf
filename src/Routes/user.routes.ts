import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/getUserbyId", UserController.getUserbyId);
userRouter.post("/createUser", UserController.createUser);
userRouter.delete("/deleteUserbyid", UserController.deleteUser);
userRouter.put("/updateUser", UserController.updateUser);

export default userRouter;