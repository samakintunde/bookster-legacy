import React from "react";
import { graphql } from "react-apollo";

import {getAuthorsQuery, addAuthorMutation, AddBookMutation} from "../queries/queries";

const AddBookForm = () => {
  return (
    <div className="add-book-form-modal-container">
      <form id="add-book-form-modal">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" required />
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <input type="text" name="genre" required />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <select name="author">
            
          </select>
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default graphql(AddBookMutation)(AddBookForm);
