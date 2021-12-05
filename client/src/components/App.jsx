import React from 'react';
import Movies from './MovieList.js'
import MovieListRender from './MovieListRender.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <MovieListRender Movies={Movies} />
    )
  }
};

export default App;