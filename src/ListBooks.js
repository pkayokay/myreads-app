import React from 'react'
import { Link } from 'react-router-dom'
import WantToRead from './WantToRead'
import CurrentlyReading from './CurrentlyReading'
import Read from './Read'
import './App.css'

class ListBooks extends React.Component {
  // static propTypes = {
  //   books: PropTypes.array.isRequired
  // }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
  }

  clearQuery = () => {
    this.setState({query: ''})
  }

  render() {
    return (

      <div>
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading/>
                <WantToRead/>
                <Read />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
      </div>
    )
  }
}

export default ListBooks