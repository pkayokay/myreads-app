import React from 'react'
import SelectForm from './SelectForm'
import { Link } from 'react-router-dom'

class ListBooks extends React.Component {
  // static propTypes = {
  //   books: PropTypes.array.isRequired
  // }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        {/* Currently Reading */}
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {this.props.books.filter( book => book.shelf === 'currentlyReading').map(n => (
                <li key={n.title}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${n.bookURL})`}}></div>
                      <div className="book-shelf-changer">
                        <SelectForm value={n.shelf}/>
                      </div>
                    </div>
                    <div className="book-title">{n.title}</div>
                    <div className="book-authors">{n.author}</div>
                  </div>
                </li>
                ))}
              </ol>
            </div>
          </div>
        {/* Want To Read */}
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want To Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {this.props.books.filter( book => book.shelf === 'wantToRead').map(n => (
                <li key={n.title}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${n.bookURL})`}}></div>
                      <div className="book-shelf-changer">
                        <SelectForm value={n.shelf}/>
                      </div>
                    </div>
                    <div className="book-title">{n.title}</div>
                    <div className="book-authors">{n.author}</div>
                  </div>
                </li>
                ))}
              </ol>
            </div>
          </div>
        {/* Read */}
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {this.props.books.filter( book => book.shelf === 'read').map(n => (
                <li key={n.title}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${n.bookURL})`}}></div>
                      <div className="book-shelf-changer">
                        <SelectForm value={n.shelf}/>
                      </div>
                    </div>
                    <div className="book-title">{n.title}</div>
                    <div className="book-authors">{n.author}</div>
                  </div>
                </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks