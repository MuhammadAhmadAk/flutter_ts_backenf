"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweetController = void 0;
const tweet_repo_1 = require("../Repositories/tweet.repo");
class TweetController {
    static getTweetbyId = async (req, res) => {
        const tweetId = req.body.tweetId;
        try {
            const Tweet = await (0, tweet_repo_1.getTweetRepo)(tweetId);
            if (Tweet) {
                res.status(200).json({
                    status: true,
                    data: Tweet
                });
            }
            else {
                res.json({
                    statuscode: req.statusCode,
                    error: 'Tweet Not found'
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
    static createTweet = async (req, res) => {
        const tweet = req.body;
        try {
            const success = await (0, tweet_repo_1.createTweetRepo)(tweet);
            if (success) {
                res.status(200).json({
                    status: success,
                    messege: 'Tweet created successfully',
                    data: tweet,
                });
            }
            else {
                res.json({
                    statuscode: req.statusCode,
                    error: 'Tweet Not created'
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
    static updateTweet = async (req, res) => {
        const updatedTweet = req.body;
        try {
            const success = await (0, tweet_repo_1.updateTweetRepo)(updatedTweet.tweetId, updatedTweet);
            if (success) {
                res.status(200).json({
                    status: success,
                    messege: 'Tweet Update successfully',
                    data: updatedTweet,
                });
            }
            else {
                res.json({
                    statuscode: req.statusCode,
                    error: 'Tweet Not Update'
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
    static deleteTweet = async (req, res) => {
        const tweetId = req.body.TweetId;
        try {
            const success = await (0, tweet_repo_1.deleteTweetRepo)(tweetId);
            if (success) {
                res.status(200).json({
                    status: success,
                    messege: 'Tweet deketed successfully',
                });
            }
            else {
                res.json({
                    statuscode: req.statusCode,
                    error: 'Tweet Not Delete'
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
exports.TweetController = TweetController;
