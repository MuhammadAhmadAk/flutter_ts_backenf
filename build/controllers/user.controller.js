"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_repo_1 = require("../Repositories/user.repo");
class UserController {
    static getUserbyId = async (req, res) => {
        const userId = req.body.userId;
        try {
            const user = await (0, user_repo_1.getUserRepo)(userId);
            if (user) {
                res.status(200).json({
                    status: true,
                    data: user
                });
            }
            else {
                res.json({
                    error: 'User Not found'
                });
            }
        }
        catch (error) {
            res.json({
                statuscode: req.statusCode,
                error: error
            });
        }
    };
    static createUser = async (req, res) => {
        const user = req.body;
        const existingUser = await (0, user_repo_1.createUserRepo)(user);
        try {
            const success = await (0, user_repo_1.createUserRepo)(user);
            if (success) {
                res.status(200).json({
                    "status ": success,
                    "messege ": "user created successfully ",
                    "data ": user,
                });
            }
            else {
                res.json({
                    "error": "User Not created "
                });
            }
        }
        catch (error) {
            res.json({
                "statuscode ": req.statusCode,
                "error ": error
            });
        }
    };
    static updateUser = async (req, res) => {
        const updatedUser = req.body;
        try {
            const success = await (0, user_repo_1.updateUserRepo)(updatedUser.uid, updatedUser);
            if (success) {
                res.status(200).json({
                    status: success,
                    message: 'User updated successfully',
                    data: updatedUser,
                });
            }
            else {
                res.status(500).json({
                    error: 'User not updated',
                });
            }
        }
        catch (error) {
            console.error('Error updating user:', error);
            res.status(500).json({
                statusCode: res.statusCode,
                error: 'Internal Server Error',
            });
        }
    };
    static deleteUser = async (req, res) => {
        const userId = req.body.userId;
        try {
            const success = await (0, user_repo_1.deleteUserRepo)(userId);
            if (success) {
                res.status(200).json({
                    status: success,
                    messege: 'user deketed successfully',
                });
            }
            else {
                res.json({
                    statuscode: req.statusCode,
                    error: 'User Not Delete'
                });
            }
        }
        catch (error) {
            res.json({
                statuscode: req.statusCode,
                error: error
            });
        }
    };
}
exports.UserController = UserController;
