import React from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from "./BooksAPI";

class ListBooks extends React.Component {
  state = {};

  handleChange = (bookId: string, e: any) => {
    let temp = this.props.books;
    const book = temp.filter(t => t.id === bookId)[0];
    book.shelf = e.target.value;
    BooksAPI.update(book, e.target.value).then(response => {
      this.setState({
        books: temp
      });
    });
  };

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
          key="currentlyReading"
          sectionTitle="Currently Reading"
          books={this.props.books.filter( book => book.shelf === "currentlyReading")}
          onChangeShelf={this.handleChange}
          />
          <BookShelf
          key="wantToRead"
          sectionTitle="Want To Read"
          books={this.props.books.filter( book => book.shelf === "wantToRead")}
          onChangeShelf={this.handleChange}
          />
          <BookShelf
          key="read"
          sectionTitle="Read"
          books={this.props.books.filter( book => book.shelf === "read")}
          onChangeShelf={this.handleChange}
          />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}


ListBooks.propTypes = {
  books: PropTypes.array
}

export default ListBooks