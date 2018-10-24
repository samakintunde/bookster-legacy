import React, { Component } from "react";

class BookView extends Component {
  state = {
    cover: "",
    description: ""
  };

  componentDidMount = () => {
    let url = "https://www.googleapis.com/books/v1/volumes?q=harry+potter";
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          cover: data.items[0].imageLinks.thumbnail,
          description: data.items[0].description
        })
      );
  };

  render() {
    let { book } = this.props;

    return (
      <div className="book-view">
        {book.title && (
          <div>
            <img src="" alt={book.title} />
            <div className="placeholder" />
            <div>
              <h2>{book.title}</h2>
              <p>{book.author.name}</p>
              <p className="description">{this.state.description}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BookView;
