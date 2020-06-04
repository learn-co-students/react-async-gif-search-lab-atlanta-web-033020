import React from 'react';

class GifSearch extends React.Component {
  state = {
    query: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.fetchUrls(this.state.query)
  }

  handleUpdate = e => {
    this.setState({
      query: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Enter a search term:</h4>
        <input type='text' onChange={this.handleUpdate} value={this.state.query} />
        <input type='submit' value='Find GIFS' />
      </form>
    )
  }
}

export default GifSearch;