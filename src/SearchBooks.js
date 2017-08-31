import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class SearchBooks extends React.Component {

  state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
    this.setState({query: query})
  }

  clearQuery = () => {
    this.setState({query: ''})
  }

  render() {
    console.log(this.state.query)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

          Search results here

          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
