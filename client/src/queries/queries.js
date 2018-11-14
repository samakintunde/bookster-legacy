import { gql } from "apollo-boost";

const getBooksQuery = gql`
  {
    books {
      title
      id
      author {
        name
      }
    }
  }
`;

const getBookQuery = gql`
  query($id: ID!) {
    book(id: $id) {
      title
      genre
      author {
        name
      }
    }
  }
`;

const getAuthorsQuery = gql`
  query {
    authors {
      id
      name
      books {
        id
        title
        genre
      }
    }
  }
`;

const addBookMutation = gql`
  mutation($title: String!, $genre: String!, authorId: ID!) {
    addBook(title: $title, genre: $genre, authorId: $authorId) {
      title
      genre
      authorId
    }
  }
`;

const addAuthorMutation = gql`
  mutation {
    addAuthor(name: $name, age: $age) {
      name
      age
    }
  }
`;

export {
  getBooksQuery,
  getBookQuery,
  getAuthorsQuery,
  addBookMutation,
  addAuthorMutation
};
