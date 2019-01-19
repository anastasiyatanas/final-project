const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const controller=  require("./Controller")
const mongoose=  require ("mongoose")


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3")

// Define API routes here
app.post("/api/users", controller.create)
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
