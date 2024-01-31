import { Response, Request, } from 'express';
import { createTweetRepo, deleteTweetRepo, getTweetRepo, upadateUserwithtweetIdRepo, updateTweetRepo } from '../Repositories/tweet.repo';
import { ITweetInterface } from '../databases/Interfaces/tweet.interface';

export class TweetController {
    static getTweetbyId = async (req: Request, res: Response) => {
        const tweetId = req.body.tweetId as string;
        try {
            const Tweet = await getTweetRepo(tweetId);
            if (!Tweet) {
                res.status(404).json({
                    status: false,
                    message: "Tweet not found",
                });
            } else {
                res.status(200).json({
                    status: true,
                    data: Tweet,
                });
            }

        } catch (error) {
            res.json({
                statuscode: req.statusCode,
                error: error
            })
        }


    }

    static createTweet = async (req: Request, res: Response) => {
        const tweet: ITweetInterface = req.body;
        try {
            const success = await createTweetRepo(tweet);
            if (success) {
                const userUpdateSuccess = await upadateUserwithtweetIdRepo(tweet.adminId, tweet.content);
                if (userUpdateSuccess) {
                    res.status(200).json(
                        {
                            status: success,
                            messege: 'Tweet created successfully',
                            data: tweet,
                        }
                    )
                } else {
                    res.status(500).json({
                        error: 'Tweet Not created'
                    })
                }

            }
            else {
                res.status(500).json({

                    error: 'Tweet Not created'
                })
            }

        } catch (error) {
            res.json({
                statuscode: req.statusCode,
                error: error
            })
        }


    }

    static updateTweet = async (req: Request, res: Response) => {
        const updatedTweet: ITweetInterface = req.body;
        try {
            const success = await updateTweetRepo(updatedTweet.tweetId, updatedTweet);
            if (success) {
                res.status(200).json(
                    {
                        status: success,
                        messege: 'Tweet Update successfully',
                        data: updatedTweet,

                    }
                )
            }
            else {
                res.json({
                    statuscode: req.statusCode,
                    error: 'Tweet Not Update'
                })
            }

        } catch (error) {
            res.json({
                statuscode: req.statusCode,
                error: error
            })
        }


    }

    static deleteTweet = async (req: Request, res: Response) => {
        const tweetId = req.body.tweetId as string;
        try {
            const success = await deleteTweetRepo(tweetId);
            if (success) {
                res.status(200).json(
                    {
                        status: success,
                        messege: 'Tweet deketed successfully',


                    }
                )
            }
            else {
                res.json({
                    error: 'Tweet Not Delete'
                })
            }

        } catch (error) {
            res.json({
                statuscode: res.statusCode,
                error: error
            })
        }


    }
}

