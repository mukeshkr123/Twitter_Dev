import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import dbConnect from "./config/dbConnect.js";
import { PORT } from "./config/serverConfig.js";
import apiRoutes from "./routes/index.js";
const app = express();

// Start the server
app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  await dbConnect();

  // Use the "combined" format for logging
  app.use(morgan("combined"));

  // parse the body
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/api/v1/tweets", (req, res) => {
    res.send("Hello World!");
  });

  //routes
  app.use("/api", apiRoutes);
});
