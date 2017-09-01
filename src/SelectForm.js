import React from 'react'

class SelectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value)
  }

  render() {
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    );
  }
}

export default SelectForm