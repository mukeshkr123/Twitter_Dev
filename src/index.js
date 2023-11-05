import express from "express";
import { PORT } from "./config/serverConfig.js";
import dbConnect from "./config/dbConnect.js";
const app = express();

import service from "./services/tweet-service.js";

// Start the server
app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  await dbConnect();

  let ser = new service();
  await ser.create({ content: " capital other #code #NODE " });
});
