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
  "mongodb://heroku_nxcf16mt:prdt1aqqjtv4j7vkdpkr24r76o@ds147003.mlab.com:47003/heroku_nxcf16mt",
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
