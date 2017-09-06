import React from 'react'

class BookShelf extends React.Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.sectionTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {this.props.books.map(n => (
            <li key={n.title}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${n.bookURL})`}}></div>
                  <div className="book-shelf-changer">
                    <select value={this.props.value} onChange={this.props.handleChange}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
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
    );
  }
}

export default BookShelf