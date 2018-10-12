const express = require("express");
const graphqlHTTP = require("express-graphql");

const schema = require("./schema/schema");

const PORT = process.env.PORT || 5000;

const app = express();

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
