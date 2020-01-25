const express = require('express');
const favicon = require('express-favicon');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;
const app = express();
const routes = require('./routes');
const connection = mongoose.connection;


// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ecohabit"
mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);

connection.once('open', function callback () {
  console.log('Connected to MongoDB!');
});


app.use(routes);

app.use(favicon(__dirname + '/build/favicon.ico'));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});