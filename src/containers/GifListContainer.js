import React from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends React.Component {
  state = {
    urls: []
  }

  fetchUrls = (query = 'dolphins') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          urls: data.data.map(d => d.images.original.url)
        });
      });
  }

  componentDidMount() {
    this.fetchUrls();
  }

  render() {
    return (
      <div>
        <GifSearch fetchUrls={this.fetchUrls} />
        <GifList urls={this.state.urls} />
      </div>
    )
  }
}

export default GifListContainer;