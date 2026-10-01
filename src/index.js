require("dotenv/config");

const express = require("express");
const app = express();

const applicationsRouter = require("./routes/applications.routes");

// This is a global middleware which checks for content type of body and convert the request body into JSON object
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Job Tracker API is running",
  });
});

app.use("/api/applications", applicationsRouter);

app.listen(process.env.PORT, () => {
  console.log("Running on PORT 5000");
});
