"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserRepo = exports.createUserRepo = exports.deleteUserRepo = exports.getUserRepo = void 0;
const user_model_1 = __importDefault(require("../databases/Models/user.model"));
const getUserRepo = async (userid) => {
    try {
        const user = await user_model_1.default.findOne({ uid: userid });
        return user;
    }
    catch (error) {
        console.log(error);
        return null;
    }
};
exports.getUserRepo = getUserRepo;
const deleteUserRepo = async (userid) => {
    try {
        const deleted = await user_model_1.default.findOneAndDelete({ uid: userid });
        if (deleted) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
};
exports.deleteUserRepo = deleteUserRepo;
const createUserRepo = async (user) => {
    try {
        await user_model_1.default.create(user);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
};
exports.createUserRepo = createUserRepo;
const updateUserRepo = async (userId, updateUser) => {
    try {
        const result = await user_model_1.default.findByIdAndUpdate({ uid: userId }, updateUser, { new: true });
        console.log(result);
        if (result) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
};
exports.updateUserRepo = updateUserRepo;
