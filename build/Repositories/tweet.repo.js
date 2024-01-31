"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTweetRepo = exports.createTweetRepo = exports.deleteTweetRepo = exports.getTweetRepo = void 0;
const tweet_model_1 = __importDefault(require("../databases/Models/tweet.model"));
const getTweetRepo = async (tweetId) => {
    try {
        const tweet = await tweet_model_1.default.findOne({ tweetId: tweetId });
        return tweet;
    }
    catch (error) {
        console.log(error);
        return null;
    }
};
exports.getTweetRepo = getTweetRepo;
const deleteTweetRepo = async (tweetTd) => {
    try {
        const deleted = await tweet_model_1.default.findOneAndDelete({ tweetId: tweetTd });
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
exports.deleteTweetRepo = deleteTweetRepo;
const createTweetRepo = async (tweet) => {
    try {
        await tweet_model_1.default.create(tweet);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
};
exports.createTweetRepo = createTweetRepo;
const updateTweetRepo = async (tweetId, updateTweet) => {
    try {
        const result = await tweet_model_1.default.findByIdAndUpdate({ tweetId: tweetId }, updateTweet, { new: true });
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
exports.updateTweetRepo = updateTweetRepo;
