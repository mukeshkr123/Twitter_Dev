import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import dbConnect from "./config/dbConnect.js";
import { PORT } from "./config/serverConfig.js";
import apiRoutes from "./routes/index.js";
const app = express();
import passport from "passport";
import { passportAuth } from "./config/jw-middleware.js";

// Start the server
app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  await dbConnect();

  // Use the "combined" format for logging
  app.use(morgan("combined"));

  // body parser
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // passport js
  app.use(passport.initialize());
  passportAuth(passport);

  // routes
  app.use("/api", apiRoutes);
});
