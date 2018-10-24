const express = require("express");
const mongoose = require("mongoose");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");

const schema = require("./schema/schema");

const PORT = process.env.PORT || 5000;

const app = express();

// Use CORS to allow requests from different origins
app.use(cors());

// Connect to MongoDB
mongoose.connect(
  "mongodb://localhost:27017/bookster",
  {
    useNewUrlParser: true
  }
);

mongoose.connection.once("open", () => {
  console.log("DB connected");
});

// Middleware for express to handle graphql requests
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`This kickass app is now started on port ${PORT}`);
});
