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
        <input type='text' onChange={this.handleUpdate} value={this.state.query} />
      </form>
    )
  }
}

export default GifSearch;