import mongoose from "mongoose";
import userModel from "../databases/Models/user.model";
import { IUserInterface } from "../databases/Interfaces/user.interface";

export const getUserRepo = async (userid: string): Promise<IUserInterface | null> => {
    try {
        const user = await userModel.findOne({ uid: userid });
        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const deleteUserRepo = async (userid: string): Promise<boolean> => {
    try {
        const deleted = await userModel.findOneAndDelete({ uid: userid });
        if (deleted) {
            return true
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}
export const createUserRepo = async (user: IUserInterface): Promise<boolean> => {
    try {
        await userModel.create(user);
        return true

    } catch (error) {
        console.log(error);
        return false;
    }
}

export const updateUserRepo = async (userId: string, updateUser: IUserInterface): Promise<boolean> => {
    try {
        const result = await userModel.findByIdAndUpdate({ uid: userId }, updateUser, { new: true });
        console.log('Update Result:', result);

        if (result) {
            return true;
        } else {
            console.error('Update failed: No matching user found.');
            return false;
        }
    } catch (error) {
        console.error('Error updating user:', error);
        return false;
    }
};
