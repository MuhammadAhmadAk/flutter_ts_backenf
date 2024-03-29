"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tweet_controller_1 = require("../controllers/tweet.controller");
const tweetRouter = (0, express_1.Router)();
//tweetRouter.get("/", TweetController.get);
tweetRouter.get("/gettweetbyid", tweet_controller_1.TweetController.getTweetbyId);
tweetRouter.post("/createTweet", tweet_controller_1.TweetController.createTweet);
tweetRouter.delete("/deleteTweet", tweet_controller_1.TweetController.deleteTweet);
tweetRouter.put("/updateTweet", tweet_controller_1.TweetController.updateTweet);
exports.default = tweetRouter;
