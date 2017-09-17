import React from 'react'
import { Link } from 'react-router-dom'
import { Throttle } from 'react-throttle'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {

  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({query: query});
     BooksAPI.search(query).then(data => {

     if (Array.isArray(data)) {
      console.log(Array.isArray(data));
      const handledBooks = data.map(book => {
        book.shelf = 'none';
        this.props.books.forEach(bookOnShelf => {
          if (book.id === bookOnShelf.id) {
            book.shelf = bookOnShelf.shelf;
          }
        })
        return book;
      })
        this.setState({
        books: handledBooks
        })
      } else {
        this.setState({
          books: []
        })
      }
    })
  }

  updateBookOnSearch(book, shelf) {
    let tempBooks = this.state.books;
    const bookUpdate = tempBooks.filter(n => n.id === book.id)[0];
    bookUpdate.shelf = shelf;
    this.setState({
      books: tempBooks
    });
    this.props.onChangeShelf(book, shelf);
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <Throttle time="400" handler="onChange">
              <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
              />
            </Throttle>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map(book =>
              <li key={book.id} className="book" style={{ width: 162 }}>
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: "url(" + book.imageLinks.thumbnail + ")"
                    }}
                  />
                  <div className="book-shelf-changer">
                    <select
                      value={book.shelf}
                      onChange={e => {
                        this.updateBookOnSearch(book, e.target.value);
                      }}
                    >
                      <option disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">
                  {book.title}
                </div>
                {book.authors &&
                  <div className="book-authors">
                    {book.authors[0]}
                  </div>}
              </li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  books: PropTypes.array,
  onChangeShelf: PropTypes.func
}

export default SearchBooks
