import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Header from "./components/Header";
import BookList from "./components/BookList";
import BookView from "./components/BookView";

import "./App.css";

// Set up Apollo client
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  state = {
    activeBook: null
  };

  showBookView = book => {
    this.setState({ activeBook: book });
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <div className="flex">
            <BookList showBookView={this.showBookView} />
            {this.state.activeBook ? (
              <BookView book={this.state.activeBook} />
            ) : (
              <div className="loading-book">
                <h2>Select a book to view it here or add a book.</h2>
              </div>
            )}
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
