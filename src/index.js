import express from "express";
import dbConnect from "./config/dbConnect.js";
import { PORT } from "./config/serverConfig.js";
import apiRoutes from "./routes/index.js";
const app = express();
import bodyParser from "body-parser";

// Start the server
app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  await dbConnect();

  // parse the body
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);
});
