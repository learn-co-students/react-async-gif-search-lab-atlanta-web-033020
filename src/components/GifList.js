import React from 'react';

class GifList extends React.Component {
  renderGifs = () => {
    return this.props.urls.map(url => <li><img src={url} alt='gif' /></li>)
  }

  render() {
    return (
      <ul>
        {this.renderGifs()}
      </ul>
    )
  }
}

export default GifList;