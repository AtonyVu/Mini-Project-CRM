const express = require("express");
const morgan = require("morgan");
const app = express();
const userRoute = require("./Routes/userRoute");
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/users", userRoute);

module.exports = app;
