import React from 'react'

class GifListContainer extends React.Component {

  state ={
    images: []
  }

  render () {
    return (
      <div>
        <GifList images={this.state.images}
        <GifSearch />
      </div>
    )
  }

  compnentDidMount(){
    fetch('http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        images: data.images.original.url
      })
    })
  }
}

export default GifListContainer;
