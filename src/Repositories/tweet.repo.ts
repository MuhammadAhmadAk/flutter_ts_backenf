import mongoose from "mongoose";
import TweetModel from "../databases/Models/tweet.model";
import { ITweetInterface } from "../databases/Interfaces/tweet.interface";
import userModel from "../databases/Models/user.model";

export const getTweetRepo = async (tweetId: string): Promise<ITweetInterface | null> => {
    try {
        const tweet = await TweetModel.findOne({ tweetId: tweetId });
        return tweet;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const deleteTweetRepo = async (tweetTd: string): Promise<boolean> => {
    try {
        const deleted = await TweetModel.findOneAndDelete({ tweetId: tweetTd });
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
export const createTweetRepo = async (tweet: ITweetInterface): Promise<boolean> => {
    try {
        await TweetModel.create(tweet);
        return true

    } catch (error) {
        console.log(error);
        return false;
    }
}

export const updateTweetRepo = async (tweetId: string, updateTweet: ITweetInterface): Promise<boolean> => {
    try {
        const result = await TweetModel.findByIdAndUpdate({ tweetId: tweetId }, updateTweet, { new: true });

        if (result) {
            return true
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const upadateUserwithtweetIdRepo = async (
    userId: string,
    tweetcontent: string
): Promise<Boolean> => {
    try {
        const result = await userModel.findOneAndUpdate(
            { uid: userId }, { $push: { tweet: tweetcontent } }
        )
        if (result) {
            return true

        } else {
            return false
        }
    } catch (error) {
        console.log(error);
        return false
    }
}