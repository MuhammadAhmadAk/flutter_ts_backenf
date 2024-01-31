import mongoose, { Document } from "mongoose";

export interface IUserInterface extends Document {
    //  _id: string,
    uid: string,
    tweet: string[],
    firstName: string,
    lastName: string,
    email: string
    createdAt: string

}