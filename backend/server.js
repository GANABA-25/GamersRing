require("dotenv").config();
const express = require("express");
const errorHandler = require("./middleware/error-handling");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const mongodb_uri = process.env.MONGODB_URI;

const app = express();

const adminRoutes = require("./routes/admin-routes");
const adminUserRoutes = require("./routes/adminUser-routes");
const userRoutes = require("./routes/user-routes");
const gameRoutes = require("./routes/game-routes");

app.use(helmet());
app.use(compression());

app.use(cors());
app.use(express.json());

app.use("/admin", adminRoutes);
app.use("/adminUser", adminUserRoutes);
app.use("/user", userRoutes);
app.use("/games", gameRoutes);

app.use(errorHandler);

mongoose
  .connect(mongodb_uri)
  .then((connect) => {
    app.listen(process.env.PORT || 8090);
    console.log("server is running");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
