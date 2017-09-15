import React from 'react'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  handleChange = (book: any, shelf: string) => {
    BooksAPI.update(book, shelf).then(response => {
      this.getBooks();
    })
  }

  getBooks() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      })
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=> (
          <ListBooks
           books={this.state.books}
          />
        )}/>
        <Route path="/search" render={({history}) => (
          <SearchBooks
            onChangeShelf={this.handleChange}
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
