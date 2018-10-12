const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema } = graphql;

// Define various data types that could be requested
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return parent.authorId;
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  })
});

// Define entry point to our Graph QL API
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return {
          id: "123",
          title: "Lord of the rings",
          genre: "adventure",
          authorId: "321"
        };
      }
    },
    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return { id: "321", name: "Samuel Akintunde" };
      }
    }
  }
});

// Define and Export Schema
module.exports = new GraphQLSchema({
  query: RootQuery
});
