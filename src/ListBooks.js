import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class ListBooks extends React.Component {

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
          />
          <BookShelf
          key="wantToRead"
          sectionTitle="Want To Read"
          books={this.props.books.filter( book => book.shelf === "wantToRead")}
          />
          <BookShelf
          key="read"
          sectionTitle="Read"
          books={this.props.books.filter( book => book.shelf === "read")}
          />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks