import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

import AddButton from "./AddButton";

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

class BookList extends Component {
  displayCurrentBook = book => {
    this.props.showBookView(book);
  };

  displayBookList = () => {
    let { data } = this.props;

    if (data.loading) {
      return <div className="loading">Loading...</div>;
    } else {
      return data.books.map(book => (
        <li
          key={book.id}
          className="book-item"
          onClick={() => this.displayCurrentBook(book)}
        >
          <p className="book-item-title">{book.title}</p>
          <p className="book-item-author">{book.author.name}</p>
        </li>
      ));
    }
  };

  render() {
    return (
      <div className="book-list-area">
        <input
          className="book-list-search"
          type="text"
          name="search"
          id="search"
          placeholder="Enter a book here..."
        />
        <ul className="book-list">{this.displayBookList()}</ul>
        <AddButton />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
