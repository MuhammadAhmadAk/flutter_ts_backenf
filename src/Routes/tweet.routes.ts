import { Router } from "express";
import { TweetController } from "../controllers/tweet.controller";

const tweetRouter = Router();
//tweetRouter.get("/", TweetController.get);
tweetRouter.get("/gettweetbyid", TweetController.getTweetbyId);
tweetRouter.post("/createTweet", TweetController.createTweet);
tweetRouter.delete("/deleteTweet", TweetController.deleteTweet);
tweetRouter.put("/updateTweet", TweetController.updateTweet);

export default tweetRouter;