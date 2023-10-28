const express = require("express");
const { PORT } = require("./config/serverConfig");
const dbConnect = require("./config/dbConnect");
const app = express();

// Start the server
app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  await dbConnect();
});
