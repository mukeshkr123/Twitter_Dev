import express from "express";
import { PORT } from "./config/serverConfig.js";
import dbConnect from "./config/dbConnect.js";
const app = express();

import service from "./services/index.js";

// Start the server
app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  await dbConnect();
});
