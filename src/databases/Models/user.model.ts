import mongoose, { Document, Schema } from "mongoose";
import { IUserInterface } from "../Interfaces/user.interface";

const userSchema = new Schema<IUserInterface>({
    //_id: { type: String, required: true },
    uid: { type: String, required: true },
    tweet: { type: [String], default: [] },
    firstName: { type: String, default: "User" },
    lastName: { type: String, default: "Name" },
    email: {
        type: String,
        required: true,
        unique: true,
        createdAt: { type: String, required: true },
    },

})
const userModel = mongoose.model<IUserInterface>("userModel", userSchema);

export default userModel;