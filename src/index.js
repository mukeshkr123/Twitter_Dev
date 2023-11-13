import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import dbConnect from "./config/dbConnect.js";
import { PORT } from "./config/serverConfig.js";
import apiRoutes from "./routes/index.js";
const app = express();

import { TweetRepository, UserRespository } from "./repository/index.js";
import LikeService from "./services/like-service.js";

// Start the server
app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  await dbConnect();

  // Use the "combined" format for logging
  app.use(morgan("combined"));

  const userRepo = new UserRespository();
  const tweetRepo = new TweetRepository();
  const tweets = await tweetRepo.getAll();
  console.log(tweets);
  const user = await userRepo.create({
    user: "uniqueUsername", // Provide a unique value for the "user" field
    email: "user@examfrfrrple.com",
    password: "<PASSWORD>",
    name: "user",
  });

  const likeservice = new LikeService();
  await likeservice.toggleLike(tweets[0].id, "Tweet", user.id);
});
